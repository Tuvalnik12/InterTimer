import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BLOCKS from '../data/blocks'
import CountDown from 'react-native-countdown-component';
import {Card} from "react-native-elements";

export default function MainTimer() {
  const [blocks, setBlocks] = useState(BLOCKS);
  const [currentBlockId, setCurrentBlockId] = useState(1);
  const [didFinish, setDidFinish] = useState(false);
  const block = blocks.find(({order}) => order === currentBlockId);

  const handleOnFinish = () => {
    block.order === blocks.length ? setDidFinish(true) : null;
    setCurrentBlockId(currentBlockId + 1);
  };

  const TimerCard = ({title, seconds}) => {
    return (
      <Card title={title} containerStyle={styles.TimerCard}>
        <Timer seconds={seconds}/>
      </Card>
    )
  };

  const Timer = ({seconds}) => {
    return (
      <CountDown
        size={20}
        until={seconds}
        onFinish={() => handleOnFinish()}
        digitStyle={{backgroundColor: '#ff0266', borderWidth: 2, borderColor: 'black'}}
        digitTxtStyle={{color: '#black'}}
        timeLabelStyle={{color: 'black', fontWeight: 'bold'}}
        separatorStyle={{color: 'black'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
    )
  };

  return (
    didFinish ?
      (
        <View>
          <Text style={{color: '#ffffff'}}>
            FINISHED!
          </Text>
        </View>
      ) : (
        <View>
          <TimerCard key={block.order} title={block.title} seconds={block.seconds}/>
        </View>
      )
  )
}


const styles = StyleSheet.create({
  TimerCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0266',
    borderColor: '#ff0266',
    borderRadius: '10px',
  },
})