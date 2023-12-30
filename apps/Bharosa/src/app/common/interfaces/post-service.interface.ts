import { PostModel } from "../models/post.model"

export interface PostServiceInterface {
    getPosts(userId: string): Promise<PostModel[]>
    addPost(post: PostModel): Promise<PostModel>
    getPostById(id: string): Promise<PostModel>
    searchPostsBySkillsDepartment(userId: string, userType: string): Promise<PostModel[]>
}
