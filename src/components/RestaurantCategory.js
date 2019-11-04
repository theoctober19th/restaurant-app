import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

//eaeaea
import SliderItem from '@components/SliderItem';
import DividerLine from '@components/DividerLine';

const RestaurantCategory = ({data, title}) => {
  return(
      <View style={styles.global_container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data = {data}
          keyExtractor={(item) => item.id}
          renderItem = {({item}) => (
            <SliderItem
              image={item.image_url}
              title={item.name}
              subtitle={`${item.rating} stars from ${item.review_count} reviews`}
            />
          )}
        />
        <DividerLine color='#eaeaea' width={1} />

      </View>
  );
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
    marginTop: 10
  },
  title:{
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 10
  }
});

export default RestaurantCategory;
