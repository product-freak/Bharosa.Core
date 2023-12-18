import CommonBootstrapper from './common/common.bootstrapper'
import { DataStore } from './common/data/datastore'
import AccountBootstrapper from './components/account/account.bootstrapper'
import UserBootstrapper from './components/user/user.bootstrapper'
import MiddlewaresBootstrapper from './middlewares/middlewares.bootstrapper'


export default class Bootstrapper {
  public static initialize() {
    CommonBootstrapper.initialize()
    AccountBootstrapper.initialize()
    UserBootstrapper.initialize()
    MiddlewaresBootstrapper.initialize();
    DataStore.initialize()
  }
}
