<template>
    <q-page>
        <!-- HEADER -->
        <div class="row seccion-titulo">
            <div class="col-7">
                <div class="row titulo">Agregar nuevo producto</div>
                <div class="row">
                    <q-breadcrumbs gutter="xs">
                        <q-breadcrumbs-el class="link" label="Home" to="/" />
                        <q-breadcrumbs-el class="link" label="Productos" to="/productos" />
                        <q-breadcrumbs-el class="link" label="Agregar" />
                    </q-breadcrumbs>
                </div>
            </div>            
            <div class="col-5 text-right">
                <q-btn
                    color="secondary"
                    dense
                    no-caps
                    aria-label="menu"
                    label="Salir"
                    to="/productos"
                    class="q-px-sm q-mr-md btn-general"
                />
                <q-btn
                    color="primary"
                    dense
                    no-caps                    
                    aria-label="menu"
                    label="Guardar"
                    class="q-px-sm btn-general"
                    @click="formValidar()"
                />       
            </div>
        </div>

        <!-- CONTENIDO -->
        <q-scroll-area class="scroll-body-index q-px-md">            
            <q-form @submit="agregar()" ref="formAgregar">
            <div class="row justify-center">
                <div class="col-8 q-my-md q-pb-xs titulo-h1 bb-h1">TITULO</div>
                <!-- CLAVE -->
                <div class="col-8 row text-center q-mb-lg">
                    <div class="col-5 text-right q-pr-md q-mt-xs">Clave *</div>
                    <div class="col-4 text-center">
                        <q-input ref="primerInput" outlined dense v-model.trim="producto.clave" hide-bottom-space
                            :rules="[val => !!val || 'Clave es requerida', val => val.length > 4 || 'Mínimo 4 caracteres']" />
                    </div>
                    <div class="col-2"></div>
                </div>
                <!-- NOMBRE -->
                <div class="col-8 row text-center q-mb-lg">
                    <div class="col-5 text-right q-pr-md q-mt-xs">Nombre *</div>
                    <div class="col-4 text-center">
                        <q-input input-class="input-general" outlined dense v-model.trim="producto.nombre" hide-bottom-space
                        :rules="[val => !!val || 'Nombre es requerido', val => val.length > 5 || 'Mínimo 5 caracteres']" />
                    </div>
                </div>
                <!-- DESCRIPCION -->
                <div class="col-8 row text-center q-mb-lg">
                    <div class="col-5 text-right q-pr-md q-mt-xs">Descripción *</div>
                    <div class="col-4 text-center">
                        <q-input outlined type="textarea" rows=3 v-model.trim="producto.descripcion" hide-bottom-space
                        :rules="[val => !!val || 'Descripción es requerida', val => val.length <= 200 || 'Máximo 200 caracteres']"/>
                    </div>
                </div>
                <!-- ACCIONES -->
                <div class="col-8 row text-center q-mb-lg">
                    <div class="col-9 text-right q-my-auto q-pr-md">
                        <q-btn
                            type="submit"
                            color="primary"
                            ref="btnGuardar"
                            dense
                            no-caps                    
                            aria-label="menu"
                            label="Guardar"
                            class="q-px-sm btn-general"
                        />
                    </div>                   
                </div>
            </div>
            </q-form>
        </q-scroll-area>
        
    </q-page>
</template>

<script>
import HerramientasService from '../../services/HerramientasService';
const herramientas = new HerramientasService();

import { ref } from 'vue';
export default {
    name:'ProductosAgregar',
    data() {
        return {
            producto: {
                clave: "",
                nombre: "",
                descripcion: "",
            }    
        }
    },

    mounted() {
        
    },

    methods: {
        async agregar() {
            console.log('agregar');
        },
        formValidar() {
            this.$refs.formAgregar.validate().then(success => {
                if (success) {
                    this.agregar();
                }
            });
        }
    }
};
</script>