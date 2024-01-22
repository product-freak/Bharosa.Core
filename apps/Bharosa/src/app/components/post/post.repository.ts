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
        return result as PostModel[];
    }

    async addPost(post: PostModel): Promise<PostModel> {
        const result = await this.client?.post?.create({data: post});
        return result as PostModel;
    }

    async getPostById(id: string): Promise<PostModel> {
        const result = await this.client?.post?.findFirst({
            where: {
                id
            }
        });
        return result as PostModel;
    }

    async searchPostsBySkillsDepartment(searchQuery: string): Promise<PostModel[]> {
        const result = await this.client?.post?.findMany({
            where: {
                searchCode: {
                    search: searchQuery
                }
            }
        });
        return result as PostModel[];
    }
}
