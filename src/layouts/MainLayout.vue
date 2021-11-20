<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="zi-100">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-img @click="irHome()" :ratio="2/1" class="cursor-pointer" width="80px" height="40px" src="../assets/logo.jpg"></q-img>
          
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="more_vert"
          aria-label="Menu"
          @click="cerrarSesion()"
        />
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="mostrarOpciones"
      v-model="leftDrawerOpen"
      show-if-above
      :key="random"
      
      :width="200"        
      class="drawer-bg q-pa-none"
    >
      <q-list separator>
        <MenuOption
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuOption from 'src/components/MenuOption.vue';

const linksList = [
  {
    datos: [
      {
        title: 'Home',
        caption: 'Inicio',
        icon: 'home',
        link: '/',
        rutaNombre: 'home',
        opciones: [],
      },
      {
        title: 'Alumnos',
        caption: 'Testeo',
        icon: 'person',
        // link: '/test',
        rutaNombre: 'alumnos',
        opciones: [
          {
            title: 'Listado de Alumnos',
            caption: 'Testeo',
            //icon: 'code',
            link: '/alumnos',
            rutaNombre: 'alumnos',
          },
          {
            title: 'Agregar Alumno',
            caption: 'Testeo',
            //icon: 'code',
            link: '/alumnos/agregar',
            rutaNombre: 'alumnosAgregar',
          },
        ]
      },
      {
        title: 'Productos',
        caption: 'Inventario',
        icon: 'assignment',
        link: '/productos',
        rutaNombre: 'productos',
        opciones: [
          {
            title: 'Listado de Productos',
            caption: 'Testeo',
            //icon: 'code',
            link: '/productos',
            rutaNombre: 'productos',
          },
          {
            title: 'Agregar Producto',
            caption: 'Testeo',
            //icon: 'code',
            link: '/productos/agregar',
            rutaNombre: 'productosAgregar',
          },
        ]
      },
    ]
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuOption
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      random: 0,
      mostrarOpciones: true,
    }
  },
  mounted() {
    this.checar();
  },
  methods: {
    checar() {
      
      let storage = JSON.parse(localStorage.getItem('usuario'));
      console.log(storage);

      if(storage == null) {
        this.$loader(false);
        return this.$router.push('/login');
      }
      
      if(storage !== null) {
        if (storage.tipo == 1) {this.mostrarOpciones = false; this.leftDrawerOpen = false;}
        else this.mostrarOpciones = true;
      }  
    },
    irHome() {
      let data = {
        menu: "home",
        submenu: "",
      };
      localStorage.setItem("menu", JSON.stringify(data));
      this.random = Math.random() * (200000 - 1) + 1;
      this.$router.push('/');
    },
    cerrarSesion() {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      this.$router.push('/login');
    }
  },
})
</script>
