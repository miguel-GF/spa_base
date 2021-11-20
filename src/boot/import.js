import { boot } from 'quasar/wrappers'
import moment from 'moment'
import excel from '../services/HerramientasService'

export default boot(({ app }) => {

  app.config.globalProperties.$moment = moment
  app.config.globalProperties.$excel  = excel
  
})
