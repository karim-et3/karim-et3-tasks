import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';
import ResetCount from './ResetCount';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {colors} from '../styles';

type HomeProps = {navigation: NavigationProp<ParamListBase>};

const Home = ({navigation}: HomeProps) => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('secondpage')}>
        <Text style={styles.nextPageStyle}>Next page</Text>
      </TouchableOpacity>
      <View style={styles.mainContainer}>
        <View style={styles.centerElements}>
          <Text style={styles.counterStyle}>{counter}</Text>
          <View style={styles.modifiersContainerStyle}>
            <Button type={'increase'} setCounter={setCounter} />
            <Button type={'decrease'} setCounter={setCounter} />
          </View>
          <ResetCount setCounter={setCounter} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterStyle: {
    backgroundColor: colors.primary,
    paddingHorizontal: 42,
    paddingVertical: 12,
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    borderRadius: 5,
  },
  centerElements: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modifiersContainerStyle: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    gap: 50,
  },
  nextPageStyle: {
    textDecorationLine: 'underline',
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default Home;
