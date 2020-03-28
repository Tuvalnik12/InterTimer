import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MainTimer from './containers/main_timer';

export default function App() {
  const [addTimerState, setAddTimer] = useState(false);
  const toggleAddTimer = () => {
    setAddTimer(!addTimerState)
  };

  return (
    <View style={styles.container}>
      <MainTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  addButtonStyle: {
    borderRadius: '50%',
    borderColor: 'black',
    backgroundColor: '#03dac6'
  },
  addTitleStyle: {
    padding: '5',
    color: 'black'
  }
});
