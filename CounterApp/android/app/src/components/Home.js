import { View, Text } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log('next page')}>
          <Text style={{position: 'absolute', right: 10, top: 10}}>
            Next page
          </Text>
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.centerElements}>
            <Text style={styles.counterStyle}>{counter}</Text>
            <View style={styles.modifiersContainerStyle}>
              <TouchableOpacity
                onPress={() => setCounter(oldCount => oldCount + 1)}
                style={styles.modifiersStyle}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCounter(oldCount => oldCount - 1)}
                style={styles.modifiersStyle}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{position: 'absolute', bottom: 0}}
              onPress={() => setCounter(0)}>
              <Text>Reset?</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Home