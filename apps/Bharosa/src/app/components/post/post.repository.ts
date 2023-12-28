import { inject, injectable } from 'inversify';
import { PostRepositoryInterface } from '../../common/interfaces/post-repository.interface';
import { DataStore } from '../../common/data/datastore';
import { PostModel } from '../../common/models/post.model';

@injectable()
export class PostRepository implements PostRepositoryInterface {
    protected client;

    constructor(@inject('DataStore') protected store: DataStore) {
        this.client = this.store.getClient();
    }

    async getPosts(userId: string): Promise<PostModel[]> {
        const result = await this.client?.post?.findMany({
            where: {
                userId,
                isDeleted: false
            }
        });
        return result ? result : [];
    }

    async addPost(post: PostModel): Promise<PostModel> {
        const result = await this.client?.post?.create({data: post});
        return result ? result : [];
    }

    async getPostById(id: string): Promise<PostModel> {
        const result = await this.client?.post?.find({
            where: {
                id
            }
        });
        return result ? result : [];
    }
}
