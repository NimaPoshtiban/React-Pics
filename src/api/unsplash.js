import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID gFY6QzSOep3VZD4MYWbfCqJlR_rNbKEeGaE4ac_bN8Y'
  }
})