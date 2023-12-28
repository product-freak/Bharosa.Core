import { inject, injectable } from 'inversify';
import { PostServiceInterface } from '../../common/interfaces/post-service.interface';
import { PostTypes } from './post.types';
import { PostModel } from '../../common/models/post.model';
import { PostRepositoryInterface } from '../../common/interfaces/post-repository.interface';

@injectable()
export class PostService implements PostServiceInterface {
    constructor(@inject(PostTypes.postRepository) private readonly postRepository: PostRepositoryInterface) {}

    async getPosts(userId: string): Promise<PostModel[]> {
        return await this.postRepository.getPosts(userId);
    }

    async getPostById(id: string): Promise<PostModel> {
        return await this.postRepository.getPostById(id);
    }

    async addPost(post: PostModel): Promise<PostModel> {
        return await this.postRepository.addPost(post);
    }
}
