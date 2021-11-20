
import { boot } from 'quasar/wrappers'
import { isEmpty } from 'lodash'

export default boot(async ({ router, store }) => {
    
    // Navigation delayed until initialization complete.
    const token = localStorage.getItem("token");
    console.log(token);
  
    router.beforeEach(async (to, from, next) => {
        to.matched.some( route =>{                        
            if(token === null) {
                if (route.meta.requiresAuth === true || isEmpty(route.meta)) {                    
                    next({ path: '/login' })                    
                }                
            }
            next()
        })
    });
    
  });