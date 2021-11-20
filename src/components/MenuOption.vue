<template>
  <q-item
    v-for="(dato, index) in datos"
    :key="index"
    clickable
    @click="mostrarSubmenu(dato)"
    dense
    class="q-py-xs"    
    :class="dato.rutaNombre == storage.menu ? 'menu-option-active' :  'menu-option-no-active'"    
  >
    <q-item-section
      v-if="dato.icon"
      avatar
    >
      <q-icon :name="dato.icon" />
    </q-item-section>

    
    <q-item-section>
      <q-item-label><span class="titulo">{{ dato.title }}</span></q-item-label>
    </q-item-section>
  </q-item>
  
  <transition 
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"      
    v-show="showSubmenu"
  >
    <submenu-option
      :opciones="opcionesSubmenu"
      @mouseleave="showSubmenu = false"
      @cerrar="showSubmenu = false"
    />
  </transition>

</template>

<script>
import { defineComponent } from 'vue'
import SubmenuOptionVue from './SubmenuOption.vue'

export default defineComponent({
  name: 'MenuOption',
  props: {
    datos: {
      type: Array,
      required: true,      
    },
  },
  components: {
    "submenu-option": SubmenuOptionVue,
  },
  // computed: {
  //   rutaActiva(dato) {      
  //     let estilo;
  //     dato.rutaNombre == this.$route.name ? estilo = "menu-option-active" :  estilo = "";
  //     return estilo;
  //   }
  // }
  data() {
    return {
      showSubmenu: false,
      opcionesSubmenu: [],
      storage: '',
      random: 0,
    }
  },
  mounted() {
    this.storage = JSON.parse(localStorage.getItem("menu"));
  },
  methods: {
    mostrarSubmenu(dato) {
      this.setMenuOptionActive(dato.rutaNombre);
      this.storage = JSON.parse(localStorage.getItem("menu"));
      this.random = Math.random() * (200000 - 1) + 1;

      if(dato.rutaNombre == 'home') {
        this.showSubmenu = false;        
        this.$router.push('/');
      }
      else {
        this.opcionesSubmenu = dato.opciones;
        this.showSubmenu = true;        
      }
    },
    setMenuOptionActive(menu, submenu = '') {
      let data = {
        menu,
        submenu,
      };
      localStorage.setItem("menu", JSON.stringify(data));
    }
  }
})
</script>