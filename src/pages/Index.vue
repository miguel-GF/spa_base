<template>
  <q-page v-if="!seccion" class="flex flex-center">
    <img      
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>

  <q-page>
    <div class="q-px-xl q-pb-xl text-center">
      <div class="q-my-md">Alumno</div>
      <div class="text-center justify-center row">

        <q-card class="col-2 q-pa-md cursor-pointer rounded-borders" @click=irCalificaciones()>
          Ver calificaciones
        </q-card>
        <div class="col-2 q-pa-md cursor-pointer">
          
        </div>
        <div class="col-2 q-pa-md cursor-pointer">
          holis
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      seccion: false,
    }
  },
  mounted() {
    this.checarUsuario(); 
  },
  methods: {
    checarUsuario() {
      let storage = JSON.parse(localStorage.getItem("usuario"));
      if(storage !== null) {
        if(storage.tipo) {
          if(storage.tipo == 1) {
            this.seccion = true;
          }
          else {
            this.seccion = false;
          }
        }
        else {
          this.seccion = false;
        }
      }
      else {
        this.seccion = false;
      }
    },
    irCalificaciones() {
      this.$router.push("/calificaciones");
    }
  }
})
</script>
