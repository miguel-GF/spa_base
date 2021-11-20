<template>
  <router-view 
    
  />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted() {
    let storage = localStorage.getItem("menu");
    if(storage) {
      //
    }
    else {
      let menu = {
        menu: "home",
        submenu: "",
      };
      localStorage.setItem("menu", JSON.stringify(menu));
    }
  },
})
</script>
