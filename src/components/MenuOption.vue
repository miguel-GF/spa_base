<template>
  <q-item
    clickable
    :class="rutaActiva"
    @click="$router.push(link)"
    dense
    class="q-py-xs"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label><span class="titulo">{{ title }}</span></q-item-label>
      <q-item-label caption>
        <span class="subtitulo">{{ caption }}</span>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuOption',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    rutaNombre: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    rutaActiva() {
      let estilo;
      this.rutaNombre == this.$route.name ? estilo = "menu-option-active" :  estilo = "";
      return estilo;
    }
  }
})
</script>