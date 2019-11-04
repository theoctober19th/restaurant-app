import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';

import LoadingComponent from '@components/LoadingComponent';

import yelp from '@api/yelp'

const DetailScreen = ({navigation}) => {

  const id = navigation.getParam('id');
  //console.log(id);
  const [result, setResult] = useState(null)

  const getRestaurantDetails = async () => {
    try{
      console.log('ehll=');
      const response = await yelp.get(`/businesses/${id}`);
      console.log(response.data.photos)
      setResult(response.data)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => {getRestaurantDetails();}, []);

  if(result == null){
    return <LoadingComponent size={100} color='#ff0000'/>
  }else{
    return(
        <View style={styles.global_container}>
          <Text style={{fontSize: 30, fontWeight: 'bold', margin: 10}}>{result.name}</Text>
          <Text style={{fontSize: 20, margin: 10}}>Featured Photos</Text>

          <FlatList
            data={result.photos}
            keyExtractor={item => item}
            renderItem = {({item}) => (
              <Image
                source={{uri: item}}
                style={{height: 200, width: 400, margin: 10}}
              />
            )
            }
          />
        </View>
    );
  }
};

const styles = StyleSheet.create({
  global_container: {
    flex: 1,
  },
});

export default DetailScreen;
