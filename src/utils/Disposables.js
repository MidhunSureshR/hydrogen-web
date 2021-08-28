/*
Copyright 2020 Bruno Windels <bruno@windels.cloud>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function disposeValue(value) {
    if (typeof value === "function") {
        value();
    } else {
        value.dispose();
    }
}

function isDisposable(value) {
    return value && (typeof value === "function" || typeof value.dispose === "function");
}

export class Disposables {
    constructor() {
        this._disposables = [];
    }

    track(disposable) {
        if (!isDisposable(disposable)) {
            throw new Error("Not a disposable");
        }
        if (this.isDisposed) {
            console.warn("Disposables already disposed, disposing new value");
            console.trace();
            disposeValue(disposable);
            return disposable;
        }
        this._disposables.push(disposable);
        return disposable;
    }

    untrack(disposable) {
        const idx = this._disposables.indexOf(disposable);
        if (idx >= 0) {
            this._disposables.splice(idx, 1);
        }
        return null;
    }

    dispose() {
        if (this._disposables) {
            for (const d of this._disposables) {
                disposeValue(d);
            }
            this._disposables = null;
        }
    }

    get isDisposed() {
        return this._disposables === null;
    }

    disposeTracked(value) {
        if (value === undefined || value === null || this.isDisposed) {
            return null;
        }
        const idx = this._disposables.indexOf(value);
        if (idx !== -1) {
            const [foundValue] = this._disposables.splice(idx, 1);
            disposeValue(foundValue);
        } else {
            console.warn("disposable not found, did it leak?", value);
        }
        return null;
    }
}
