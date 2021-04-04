import { getIdentifierColorNumber, avatarInitials } from "./avatar.js";

export class AvatarCreator {
    // Avatar view model contract
    static avatarColorNumber(userId) {
        return getIdentifierColorNumber(userId);
    }

    static avatarUrl(avatarUrl, mediaRepository) {
        if (avatarUrl) {
            return mediaRepository.mxcUrlThumbnail(avatarUrl, 30, 30, "crop");
        }
        return null;
    }

    static avatarLetter(userId) {
        return avatarInitials(userId);
    }

    static avatarLetter(userId) {
        return avatarInitials(userId);
    }
}