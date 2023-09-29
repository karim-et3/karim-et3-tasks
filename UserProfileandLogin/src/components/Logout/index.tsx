import {observer} from 'mobx-react-lite';
import adminStore from '../../mobx/Admin';
import {useEffect} from 'react';

const Logout = () => {
  useEffect(() => {
    adminStore.logOut();
  }, []);
  return <></>;
};

export default observer(Logout);
