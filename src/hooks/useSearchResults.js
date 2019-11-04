import {useState, useEffect} from 'react';

import yelp from '@api/yelp';

export default () => {

  const [results, setResults] = useState([]);

  const apicall = async (searchText) => {
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

  useEffect(() => apicall('pasta'), []);

  return [results, apicall];
}
