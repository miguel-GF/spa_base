<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="window-height window-width row justify-center items-center">
      <q-parallax class="h100p" src="../assets/fondo-login.jpg">
        <q-card class="w350">
          <q-card-section class="text-center titulo-login">
            Bienvenido          
          </q-card-section>
          <q-card-section class="text-center">
            <q-form @submit.prevent="login()">
            <div class="row justify-center">
              <!-- CLAVE -->
              <div class="col-12 justify-center q-mb-lg">
                  <div class="justify-center row">
                      <div class="w70 text-right q-mt-sm">Usuario</div>
                      <q-input class="w150 q-ml-md" outlined dense v-model.trim="usuario"
                      :rules="[val => !!val || 'Usuario es obligatorio']" />
                  </div>
              </div>
              <!-- PASSWORD -->
              <div class="col-12 justify-center q-mb-lg">
                  <div class="justify-center row">
                      <div class="w70 text-right q-mt-sm">Password</div>
                      <q-input class="w150 q-ml-md" outlined dense v-model.trim="password"
                      type="password"
                      :rules="[val => !!val || 'Password es obligatorio']" />
                  </div>
              </div>
              <!-- ACCIONES -->
              <div class="col-12 row justify-center q-mb-lg">
                  <div class="">
                      <q-btn
                          type="submit"
                          color="positive"
                          ref="btnGuardar"
                          dense
                          no-caps                    
                          aria-label="menu"
                          label="Ingresar"
                          class="q-px-sm btn-general"
                      />
                  </div>                   
              </div>
            </div>
            </q-form>  
          </q-card-section>
        </q-card>
        
      </q-parallax>
    </q-page>
  </q-layout>
</template>

<script>
//when loading:        
    if (sessionStorage.getItem('reloading') === "true") {
      sessionStorage.clear(); //so it doesn't trigger next time
      alert("I've been reloaded!");
      window.location.assign("/")
    }
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  data () {
    return {
      usuario: "",
      password: "",      
    }
  },
  methods: {
    login() {
      this.$loader(true, 'Iniciando sesión...');

      let config = {
        header : {
            'Content-Type' : 'multipart/form-data'
        }
      };

      let params = new FormData();
      params.append("usuario", this.usuario);
      params.append("password", this.password);

      this.$post("usuarios/login", params)
      .then( resp => {
        let data = resp.data;
        console.log(data);
        if(data.status == 200) {

          localStorage.setItem("token", data.token);
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          localStorage.setItem('reloading',"true");
          window.location.reload(true);
          this.recarga()

        }
        else if(data.status == 300) {          
          this.$notify(data.mensaje, 'error');
        }
        else {          
          this.$notify(data.mensaje, 'advertencia');
        }

        this.$loader(false);
      })
      .catch(error => {
        console.log(error);
        this.$loader(false);
        this.$notify(error, 'error');
      });
    },
    recarga() {
      if (localStorage.getItem('reloading') === "true") {
        localStorage.removeItem('reloading');
        window.location.assign("/")
      }
    }
  },
})
</script>
