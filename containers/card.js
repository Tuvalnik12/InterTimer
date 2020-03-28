import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../components/title';
import Timer from '../components/timer';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Title title={'TEST'}/>
        <Timer timerTime={this.props.timerTime}/>
      </View>
    )
  }
};