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

import zomato from '@api/zomato'
import yelp from '@api/yelp';

const dummyData = [
  {title: 'Kathmandu Momo', image: 'https://i1.wp.com/merokhaja.com/wp-content/uploads/2018/07/online-food-delivery-in-butwal-chicken-momo.png?fit=780%2C558&ssl=1', subtitle:'4.5 Stars, 932 Reviews'},
  {title: 'BajeKo Sekuwa', image: 'https://i.ytimg.com/vi/TsC47Q6TrPk/hqdefault.jpg', subtitle:'4.3 Stars, 20 Reviews'},
  {title: 'Burger House', image: 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg', subtitle:'4.2 Stars, 123 Reviews'}
]



const SearchScreen = () => {

  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);

  const apicall = async () => {
    try{
      const response = await yelp.get('/businesses/search', {
        params: {
          term: searchText,
          limit: 15,
          location: 'NYC'
        }
      });
      setResults(response.data.businesses)
    }catch(err){
      console.log(err);
      setResults([])
    }
  }

  return(
      <View style={styles.global_container}>

        <SearchBar
          onChangeText={(newText) => setSearchText(newText)}
          onEndEditing={() => apicall()}
          value={searchText}
        />

        <ScrollView>
          <RestaurantCategory
            data={results}
            title='Cost Effective'
          />

          <RestaurantCategory
            data={results}
            title='Bit Pricier'
          />

          <RestaurantCategory
            data={results}
            title='Big Spender!'
          />

        </ScrollView>

      </View>

  );
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },
});

export default SearchScreen;
