import {observer} from 'mobx-react';
import adminStore from '../mobx/Admin';

const Logout = () => {
  return adminStore.logOut();
};

export default observer(Logout);
