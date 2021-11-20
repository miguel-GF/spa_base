import { process } from 'quasar/wrappers'
import axios from 'axios'

function getToken() {
  return localStorage.getItem("token");
}

function getUserId() {
  return JSON.parse(localStorage.getItem("usuario")).usuario_id;
}

const baseURL = process.env.API_URL;
const headers = {
    'X-Requested-With': 'XMLHttpRequest',
};

const api = axios.create({ 
  baseURL, 
  headers,
  timeout: 10000,
  //responseType: 'json',
})

//Solicitar intercepción
api.interceptors.request.use(
  config => {
      if(getToken()){
        // config.headers['ContentType'] = 'application/json;chartset=utf-8';
        config.headers['token'] = getToken();
        config.params = {
          autorId: getUserId(),
          ...config.params,
        }
      }

      return config;
  },
  error => {
      Promise.reject(error);
  }
)

 // Intercepción de respuesta
 api.interceptors.response.use(
  response => {
      let res = response.data;
      if (response.status == 200) { // Cuando la solicitud es exitosa
        if(response.data.status == 600)
          return Promise.reject(response.data);
        
        return Promise.resolve(response);
      } else {
        // Procesamiento de varios estados de solicitud
      }
  },
  error => {
      return Promise.reject(error);
  }
)

export { api, axios }
