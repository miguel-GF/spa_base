import { boot } from 'quasar/wrappers'
import { api } from '../boot/axios'
import { Notify } from 'quasar';

const get = (url, params) => {
  return new Promise((resolve, reject)=>{
      api.get(url, params).then(res=>{
          resolve(res);
      }).catch(err=>{
          reject(err);
      })
  })
}

const post = (url, params) => {
  return new Promise((resolve, reject)=>{
      api.post(url, params).then(res=>{
          resolve(res);
      }).catch(err=>{          
          reject(err);
      })
  })
}

export default boot(async ({ app }) => {
  
  app.config.globalProperties.$get = get

  app.config.globalProperties.$post = post

})

