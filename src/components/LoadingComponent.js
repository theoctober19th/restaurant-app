import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

const LoadingComponent = ({size, color}) => {
  return(
      <View style={styles.global_container}>
        <ActivityIndicator size={size} color={color}/>
      </View>
  );
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LoadingComponent;
