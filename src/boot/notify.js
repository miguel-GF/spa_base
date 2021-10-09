// util/notify.js
import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar';

const notify = (message, tipo) => {
  let color;
  switch (tipo) {
    case "exito":
      color = "positive";
      break;
    case "advertencia":
      color = "warning";
      break;
    case "error":
      color = "negative";
      break;
  
    default:
      color = "primary";
      break;
  }

  Notify.create({
    message,
    color,
    avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
    actions: [
      { label: 'Reply', color: 'yellow', handler: () => { /* ... */ } },
      { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } },
    ],
  });
};

export default boot(({ app }) => {
  app.config.globalProperties.$notify = notify
})