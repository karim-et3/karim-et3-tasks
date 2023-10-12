import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import newsStore from './News';
import {NEWS_API_KEY} from '@env';
import axios from 'axios';

const apiKey = NEWS_API_KEY;

class Search {
  text = observable.box<string>('');
  loading = observable.box<boolean>(false);
  error = observable.box('');
  searchBarFocus = observable.box<boolean>(false);
  noResults = observable.box<boolean>(false);

  search(text: string) {
    runInAction(async () => {
      try {
        const options = {
          method: '',
          url: 'https://www.newsapi.org/v2/everything',
          params: {
            q: text ? text : this.text,
            pageSize: 10,
          },
          headers: {'X-Api-Key': apiKey},
        };
        this.setLoading(true);
        const response = await axios.request(options);
        if (!response.data.totalResults) this.setNoResults(true);
        else {
          this.setError('');
          this.setNoResults(false);
          newsStore.setNews(response.data.articles);
        }
      } catch (error: any) {
        console.log(error);
        this.setError(error);
      } finally {
        this.setLoading(false);
      }
    });
  }

  setText(text: string) {
    runInAction(() => {
      this.text.set(text);
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
  setSearchBarFocus() {
    runInAction(() => {
      this.searchBarFocus.set(!this.getSearchBarFocus);
    });
  }
  setNoResults(status: boolean) {
    runInAction(() => {
      this.noResults.set(status);
    });
  }
  get getText() {
    return this.text.get();
  }
  get isLoading() {
    return this.loading.get();
  }
  get getError() {
    return this.error.get();
  }
  get getSearchBarFocus() {
    return this.searchBarFocus.get();
  }
  get getNoResults() {
    return this.noResults.get();
  }
}
const createSearchInstance = memoize(
  () => new Search(),
  () => 1,
);
const searchtSore = createSearchInstance();
export default searchtSore;
