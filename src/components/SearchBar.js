import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'



const SearchBar = ({onChangeText, onEndEditing, searchText}) => {



  return(
      <View style={styles.global_container}>
        <Icon name='search' size={30} style={styles.searchIcon}/>
        <TextInput
          placeholder={'Search'}
          style={styles.searchTextInput}
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText = {onChangeText}
          onEndEditing = {onEndEditing}
          value={searchText}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  global_container: {
    height : 50,
    backgroundColor: '#eeeced',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row'
  },
  searchIcon:{
  },
  searchTextInput:{
    fontSize: 20,
    marginLeft: 10,
    flex:1,
  }
});

export default SearchBar;
