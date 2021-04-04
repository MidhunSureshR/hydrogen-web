import { TemplateView } from "../../../general/TemplateView.js";
import { renderAvatar } from "../../../common.js";

export class MemberNameTile extends TemplateView {

    render(t, vm) {
        return t.div({ className: "MemberNameTile" }, [renderAvatar(t, vm, 30, false), vm.memberName]);
    }
}