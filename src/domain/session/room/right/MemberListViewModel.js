import { ViewModel } from "../../../ViewModel.js";
import { MemberNameTile } from "./MemberNameTile.js";

export class MemberListViewModel extends ViewModel {

    constructor(room) {
        super();
        this._room = room;
    }

    /**
     * Used to convert mx:// into http links.
     * Needed to get proper URL of avatar image.
    **/
    get mediaRepository() {
        return this._room.mediaRepository;
    }

    /**
     * Map of members in a room.
     */
    get members() {
        return this._room._memberList._members._values;
    }

    getMemberTileModel(member) {
        return new MemberNameTile(member, this.mediaRepository);
    }

}