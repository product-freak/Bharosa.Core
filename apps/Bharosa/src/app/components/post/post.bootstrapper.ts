import { injectable } from "inversify"
import { CommonContainer } from "../../common/container"
import { PostRepositoryInterface } from "../../common/interfaces/post-repository.interface"
import { PostServiceInterface } from "../../common/interfaces/post-service.interface"
import { PostController } from "./post.controller"
import { PostRepository } from "./post.repository"
import { PostService } from "./post.service"
import { PostTypes } from "./post.types"

@injectable()
export default class PostBootstrapper {
    public static initialize() {
      CommonContainer.bind<PostRepositoryInterface>(PostTypes.postRepository).to(
        PostRepository,
      )
      CommonContainer.bind<PostServiceInterface>(PostTypes.postService).to(
        PostService,
      )
      CommonContainer.bind<PostController>(PostTypes.postController).to(PostController)
    }
}