import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers:{
    Authorization: 'Bearer 91Qcb974EdJtPwGBgX-ftbef8-08sBI3wiq0doKCbbEkCm2BMzVpTK7xJfMbud7d-XwctnvdyBzOpIXSE5ueW4g9UV0A5BWmO7HVQHMx1lJXfn_dQmPzUq6gBPu-XXYx'
  }
});

export default instance;
