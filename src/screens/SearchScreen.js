import React, {Component, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView
} from 'react-native';

import SearchBar from '@components/SearchBar';
import SliderItem from '@components/SliderItem';
import RestaurantCategory from '@components/RestaurantCategory';
import LoadingComponent from '@components/LoadingComponent';

import useSearchResults from '@hooks/useSearchResults';


const SearchScreen = () => {

  const [searchText, setSearchText] = useState('');
  const [results, apicall] = useSearchResults();

  if(results.length === 0){
    return (
      <View style={styles.global_container}>

        <SearchBar
          onChangeText={(newText) => setSearchText(newText)}
          onEndEditing={() => apicall(searchText)}
          value={searchText}
        />

        <LoadingComponent size={100} color='#ff0000'/>

      </View>
    );
  } else{
    return(
        <View style={styles.global_container}>

          <SearchBar
            onChangeText={(newText) => setSearchText(newText)}
            onEndEditing={() => {
              apicall(searchText)
            }}
            value={searchText}
          />

          <ScrollView>
            <RestaurantCategory
              data={results.filter(rest => rest.price === '$')}
              title='Cost Effective'
            />

            <RestaurantCategory
              data={results.filter(rest => rest.price === '$$')}
              title='Bit Pricier'
            />

            <RestaurantCategory
              data={results.filter(rest => rest.price === '$$$')}
              title='Big Spender!'
            />

          </ScrollView>

        </View>

    );
  }

};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },
});

export default SearchScreen;
