import {View, Text, ScrollView, ActivityIndicator, Image} from 'react-native';
import React from 'react';
import useFetch from '../hook/useFetch';
import {SIZES} from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';
import themeStore from '../mobx/Theme';
import {Tnews} from '../types';

const Home = () => {
  const {data, isLoading, error} = useFetch('news');
  return (
    <View style={{flex: 1, backgroundColor: themeStore.colors.white}}>
      {isLoading ? (
        <ActivityIndicator
          style={{flex: 1}}
          color={themeStore.colors.primary}
          size={'large'}
        />
      ) : error ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              padding: 8,
              borderRadius: 200,
              backgroundColor: themeStore.colors.primary,
              alignSelf: 'center',
            }}>
            <FontAwesomeIcon
              size={30}
              color={themeStore.colors.white}
              icon="exclamation"
            />
          </View>
          <Text style={{color: themeStore.colors.black}}>Error occured.</Text>
        </View>
      ) : (
        <ScrollView>
          {data.map((news: Tnews) => (
            <View
              key={news.publishedAt}
              style={{flexDirection: 'row', borderBottomWidth: 1.5}}>
              <Image
                source={{uri: news.urlToImage}}
                style={{width: 100, height: 100}}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  paddingRight: 10,
                  paddingLeft: 8,
                  paddingVertical: 3,
                }}>
                <Text
                  style={{
                    fontSize: SIZES.medium,
                    flexShrink: 1,
                    color: themeStore.colors.black,
                  }}>
                  {news.title}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.medium,
                    color: themeStore.colors.grey,
                  }}>
                  {new Date(news.publishedAt).toLocaleTimeString()}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default observer(Home);
