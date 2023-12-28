import { PostModel } from "../models/post.model";

export interface PostRepositoryInterface {
    getPosts(userId: string): Promise<PostModel[]>
    addPost(post: PostModel): Promise<PostModel>
    getPostById(id: string): Promise<PostModel>
}
