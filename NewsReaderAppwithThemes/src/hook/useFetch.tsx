import {useEffect, useState} from 'react';
import axios from 'axios';
import {NEWS_API_KEY} from '@env';
import {Alert} from 'react-native';

const apiKey = NEWS_API_KEY;

const useFetch = (query: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: '',
    url: 'https://www.newsapi.org/v2/everything',
    params: {
      q: query,
      pageSize: 10,
    },
    headers: {'X-Api-Key': apiKey},
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.articles);
    } catch (error: any) {
      Alert.alert('Error occured');
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {data, isLoading, error};
};

export default useFetch;
