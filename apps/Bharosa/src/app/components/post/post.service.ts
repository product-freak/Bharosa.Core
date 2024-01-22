import { inject, injectable } from 'inversify';
import { PostServiceInterface } from '../../common/interfaces/post-service.interface';
import { PostTypes } from './post.types';
import { PostModel } from '../../common/models/post.model';
import { PostRepositoryInterface } from '../../common/interfaces/post-repository.interface';
import { ProfileTypes } from '../profile/profile.types';
import { ProfileServiceInterface } from '../../common/interfaces/profile-service.interface';

@injectable()
export class PostService implements PostServiceInterface {
    constructor(@inject(PostTypes.postRepository) private readonly postRepository: PostRepositoryInterface, @inject(ProfileTypes.profileService) private profileService: ProfileServiceInterface) {}

    async getPosts(userId: string): Promise<PostModel[]> {
        return await this.postRepository.getPosts(userId);
    }

    async getPostById(id: string): Promise<PostModel> {
        return await this.postRepository.getPostById();
    }

    async addPost(post: PostModel): Promise<PostModel> {
        post.searchCode = this.createSearchCode(post);
        delete post.notification;
        delete post.expiredOn;
        delete post.scheduledOn;
        return await this.postRepository.addPost(post);
    }

    async searchPostsBySkillsDepartment(userId: string, userType: string): Promise<PostModel[]> {
        const profileDetails = await this.profileService.getProfileByUserId(userId);
        let searchQuery = '';
        if (userType) {
            searchQuery = userType.toLowerCase();
        }
        if (profileDetails.skills) {
            searchQuery = (searchQuery ? ' | ' : '') + profileDetails.skills.join(' | ')?.toLowerCase();
        }
        return await this.postRepository.searchPostsBySkillsDepartment(searchQuery);
    }

    private createSearchCode(post: PostModel) {
        let searchCode = '';
        if (post.department) {
            searchCode += post.department.toLowerCase();
        }
        if (post.location) {
            searchCode += (searchCode ? '' : '') + post.location.toLowerCase();
        }
        if (post.skills) {
            searchCode += (searchCode ? '' : '') + post.skills.join().toLowerCase();
        }
        return searchCode;
    }
}
