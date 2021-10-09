<template>
  <div class="zi-100 submenu">
    <q-list>
        <q-item :class="opcion.rutaNombre == this.$route.name ? 'submenu-option-active' :  ''"  clickable dense 
            class="q-py-xs" @click="irRuta(opcion)"
            v-for="(opcion, index) in opciones" :key="index">
            <q-item-label class="titulo q-my-auto">
                {{ opcion.title || '--' }}
            </q-item-label>
        </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuOption',
  props: {
    opciones: {
      type: Array,
      required: true
    },  
  },
  data() {
    return {
      showSubmenu: false,
    }
  },
  methods: {
    irRuta(opcion) {      
      this.$emit('cerrar');
      this.$router.push(opcion.link);
    }
  }
})
</script>