import {runInAction} from 'mobx';
import toastStore from '../Toast';
import courseStore from '.';
import {IP, PORT} from '@env';
import axios from 'axios';
import {navigate} from '../../routes/NavigationRef';

const remove = ({id}: {id: number}) => {
  runInAction(async () => {
    try {
      const response = await axios.delete(
        `http://${IP}:${PORT}/courses/delete/${id}`,
      );
      console.log(response.data);
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });
      navigate('courses', {});
    } catch (error: any) {
      console.log(JSON.stringify(error.response.data, null, 3));
      toastStore.changeVisiblity({
        message: error.response.data.message,
        error: true,
      });
    } finally {
      courseStore.setIsLoading(false);
    }
  });
};
export {remove};
