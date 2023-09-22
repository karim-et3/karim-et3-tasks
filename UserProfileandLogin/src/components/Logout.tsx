import {observer} from 'mobx-react-lite';
import adminStore from '../mobx/Admin';
import {Tnavigation} from '../types';

const Logout = ({navigation}): Tnavigation => {
  adminStore.logOut();
  return navigation.goBack();
};

export default observer(Logout);
