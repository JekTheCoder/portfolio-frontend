import { Blog } from "./blog";

export interface BlogContent extends Blog {
    comments: Comment[]
}