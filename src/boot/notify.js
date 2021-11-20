// util/notify.js
import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar';

const notify = (message, tipo) => {
  let color, icon;
  let textColor = 'white';
  switch (tipo) {
    case "exito":
      color = "positive";
      icon  = "thumb_up";
      break;
    
    case "advertencia":
      color = "amber-5";
      icon  = "priority_high";
      textColor = "black";
      break;
    
    case "error":
      color = "negative";
      icon  = "report_problem";
      break;
  
    default:
      color = "info";
      icon  = "info";
      break;
  }

  Notify.create({
    progress: true,
    message,
    color,
    icon,
    position: 'top',
    textColor,
    actions: [
      { label: 'x', color: textColor, handler: () => { /* ... */ } },
    ],
  });
};

export default boot(({ app }) => {
  app.config.globalProperties.$notify = notify
})