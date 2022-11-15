import axios from 'axios';

export default axios.create({
  // Make sure to update the baseURL 
  // each time when you restart the tunnel 
  // as it changes each time
  baseURL: 'https://8132-75-158-102-96.ngrok.io'
});