import {runInAction} from 'mobx';
import courseStore from '.';
import toastStore from '../Toast';
import axios from 'axios';
import {IP, PORT} from '@env';
import {navigate} from '../../routes/NavigationRef';
import {TCourse} from '../../types';

const create = ({code, subject, duration}: TCourse) => {
  runInAction(async () => {
    try {
      if (!code) {
        toastStore.changeVisiblity({
          message: 'Code is required',
          error: true,
        });
        return;
      }
      if (!subject) {
        toastStore.changeVisiblity({
          message: 'Subject is required',
          error: true,
        });
        return;
      }
      courseStore.setIsLoading(true);
      const response = await axios.post(`http://${IP}:${PORT}/courses`, {
        data: {code, subject, duration},
      });
      console.log(response.data.course);
      courseStore.courses.push(response.data.course);
      toastStore.changeVisiblity({
        message: response.data.message,
        error: false,
      });

      courseStore.resetInput();
      navigate('home-drawer', {screen: 'courses'});
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
export {create};
