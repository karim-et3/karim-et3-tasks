import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {Tnews} from '../types';
import {NEWS_API_KEY} from '@env';
import axios from 'axios';
import {Alert} from 'react-native';

const apiKey = NEWS_API_KEY;

class News {
  news = observable.array<Tnews>();
  loading = observable.box<boolean>(false);
  error = observable.box('');

  async fetchNews(query: string) {
    const options = {
      method: '',
      url: 'https://www.newsapi.org/v2/everything',
      params: {
        q: query,
        pageSize: 10,
      },
      headers: {'X-Api-Key': apiKey},
    };
    this.setLoading(true);
    try {
      const response = await axios.request(options);
      this.setNews(response.data.articles);
    } catch (error: any) {
      Alert.alert('Error occured');
      console.log(error);
      this.setError(error);
    } finally {
      this.setLoading(false);
    }
  }
  setNews(news: Array<Tnews>) {
    runInAction(() => {
      this.news.replace(news);
    });
  }
  setLoading(loading: boolean) {
    runInAction(() => {
      this.loading.set(loading);
    });
  }
  setError(error: string) {
    runInAction(() => {
      this.error.set(error);
    });
  }
  get isLoading() {
    return this.loading.get();
  }
  get getError() {
    return this.error.get();
  }
  get getNews() {
    return this.news;
  }
}
const createNewsInstance = memoize(
  () => new News(),
  () => 1,
);
const newsStore = createNewsInstance();
export default newsStore;
