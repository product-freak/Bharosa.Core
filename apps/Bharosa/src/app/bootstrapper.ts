import CommonBootstrapper from './common/common.bootstrapper'
import { DataStore } from './common/data/datastore'
import AccountBootstrapper from './components/account/account.bootstrapper'
import PostBootstrapper from './components/post/post.bootstrapper'
import ProfileBootstrapper from './components/profile/profile.bootstrapper'
import UserBootstrapper from './components/user/user.bootstrapper'
import MiddlewaresBootstrapper from './middlewares/middlewares.bootstrapper'


export default class Bootstrapper {
  public static initialize() {
    CommonBootstrapper.initialize()
    AccountBootstrapper.initialize()
    UserBootstrapper.initialize()
    PostBootstrapper.initialize()
    ProfileBootstrapper.initialize();
    MiddlewaresBootstrapper.initialize();
    DataStore.initialize()
  }
}
