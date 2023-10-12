import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {Tnews} from '../types';

class News {
  news = observable.array<Tnews>();

  setNews(news: Array<Tnews>) {
    runInAction(() => {
      this.news.replace(news);
    });
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
