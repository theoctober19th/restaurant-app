import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '0d74d5c1605771fc89a1294e34f0c2c7'
  }
});

export default instance;
