import { ViewModel } from "../../../ViewModel.js";
import { AvatarCreator } from "../../../AvatarCreator.js";

export class MemberNameTile extends ViewModel {

    constructor(member, mediaRepository) {
        super();
        this._member = member;
        this._mediaRepository = mediaRepository;
    }

    get avatarUrl() {
        return AvatarCreator.avatarUrl(this._member.avatarUrl,
            this._mediaRepository);
    }

    get avatarColorNumber() {
        return AvatarCreator.avatarColorNumber(this._member.userId);
    }

    get avatarTitle() {
        return this._member.displayName;
    }

    get avatarLetter() {
        return AvatarCreator.avatarLetter(this._member.userId);
    }

    get memberName() {
        return this._member.displayName;
    }

}