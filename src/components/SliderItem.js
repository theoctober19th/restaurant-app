import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const SliderItem = ({title, image, subtitle}) => {
  return(
      <TouchableOpacity>
        <View style={styles.global_container}>
          <Image
            source={{uri: image}}
            style={styles.image}
          />
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.ratingText}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
    margin: 5
  },
  image:{
    height: 200,
    width: 300,
    borderRadius: 8
  },
  titleText:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5
  },
  ratingText:{
    color: '#b9b9b9'
  }
});

export default SliderItem;
