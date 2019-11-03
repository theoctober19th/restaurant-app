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
          keyExtractor={(item) => item.title}
          renderItem = {({item}) => (
            <SliderItem
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
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
