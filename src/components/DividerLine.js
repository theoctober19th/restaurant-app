import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const DividerLine = ({color, width}) => {
  return(
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: width,
        marginHorizontal: 10
      }}
    />
  );
};

export default DividerLine;
