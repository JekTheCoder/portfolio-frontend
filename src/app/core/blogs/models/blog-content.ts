import { Blog } from './blog';
import { Comment } from './comment';

export interface BlogContent extends Blog {
	comments: Comment[];
}
