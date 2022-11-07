import { Profile } from "src/app/modules/_app/models/profile.interface";

export interface Comment {
    id: unknown,
    content: string,
    edited: boolean,
    userId: unknown,
    blogId: unknown,

    user: Profile
}