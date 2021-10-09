// util/loader.js
import { boot } from 'quasar/wrappers'
import { Loading, QSpinnerClock } from 'quasar';

const loader = (show, message) => {
    show 
    ? 
    Loading.show({
      delay: 0,
      spinner: QSpinnerClock,
      message: message,
    })
    :
    Loading.hide()
  };

export default boot(({ app }) => {
  app.config.globalProperties.$loader = loader
})
