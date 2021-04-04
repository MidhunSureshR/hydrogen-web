import { TemplateView } from "../../../general/TemplateView.js";
import { MemberNameTile } from "./MemberNameTileView.js";

export class MemberListView extends TemplateView {

    _shouldDisplay(value) {
        return value.displayName && value.membership === "join";
    }

    _createMemberTile(t, vm) {
        return t.view(new MemberNameTile(vm));
    }

    _getMemberTiles(t, vm) {
        let array = [];
        for (const value of vm.members.values()) {
            if (this._shouldDisplay(value))
                array.push(this._createMemberTile(t, vm.getMemberTileModel(value)));
        }
        return array;
    }

    render(t, vm) {
        const title = t.div({ className: "MemberListTitle" }, ["Members"]);
        const child = [title, ...this._getMemberTiles(t, vm)];
        return t.div({ className: "MemberListPanel" }, child);
    }

}