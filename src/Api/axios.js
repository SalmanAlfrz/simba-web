import axios from 'axios';

export default axios.create({
  baseURL: 'https://simba-upi-api.herokuapp.com/api/v1/'
});