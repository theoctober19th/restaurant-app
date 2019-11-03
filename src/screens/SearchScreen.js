import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const SearchScreen = () => {
  return(
      <View style={styles.global_container}>
        <Text>Welcome to Search Screen</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },
});

export default SearchScreen;
