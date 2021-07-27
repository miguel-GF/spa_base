<template>
    <q-page>
        <!-- HEADER -->
        <div class="row seccion-titulo">
            <div class="col-7">
                <div class="row titulo">Inventario</div>
                <div class="row">
                    <q-breadcrumbs gutter="xs">
                        <q-breadcrumbs-el class="link" label="Home" to="/" />
                        <q-breadcrumbs-el class="link" label="Inventario" />
                    </q-breadcrumbs>
                </div>
            </div>            
            <div class="col-5 text-right">
                <q-btn
                    color="primary"
                    dense
                    no-caps
                    icon-right="add"
                    aria-label="menu"
                    label="Agregar"
                    class="q-px-sm q-mr-md"
                />
                <q-btn
                    color="primary"
                    dense
                    no-caps
                    icon-right="save"
                    aria-label="menu"
                    label="Exportar csv"
                    class="q-px-sm"
                    @click="exportarExcel()"
                />       
            </div>
        </div>

        <!-- CONTENIDO -->
        <q-scroll-area class="scroll-body-index q-px-md">
            <div class="row">
                <div class="col-3 q-pr-md q-mt-md">
                    <q-input outlined dense  v-model="filter" placeholder="Búsqueda" style="min-height: 10px!important;">
                        <template v-slot:append>
                            <q-icon size="22px" name="search"></q-icon>
                        </template>
                    </q-input>
                </div>
                <div class="col-6 q-mt-md">
                    <q-btn
                        color="primary"
                        dense
                        no-caps
                        outline
                        label="Limpiar"
                        class="q-px-sm q-mr-md w90"                        
                    /> 
                    <q-btn
                        color="primary"
                        dense
                        no-caps
                        outline
                        label="Filtros"
                        :icon-right="!mostrarFiltros ? 'arrow_drop_down' : 'arrow_drop_up'"
                        class="q-px-sm w90"
                        @click="abrirFiltros()"
                    /> 
                </div>
                <q-slide-transition>
                    <div v-show="mostrarFiltros" class="col-12 filtros-container q-my-md">
                        hola
                    </div>
                </q-slide-transition>
      
            </div>

            <div class="q-mt-lg">
                <q-table
                    
                    :rows="rows"
                    :columns="columns"
                    row-key="name"
                    dense
                    class="main-table"
                    :filter="filter"
                    :pagination="initialPagination"
                />
            </div>
        </q-scroll-area>
        
    </q-page>
</template>

<script>
import HerramientasService from '../../services/HerramientasService';
const herramientas = new HerramientasService();

import { ref } from 'vue';
export default {
    name:'Inventario',
    data() {
        return {
            rows: [
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
                {clave:"345", nombre:"Producto 1", descripcion:"Hello world..."},
            ],
            columns: [
                {name: 'clave', align: 'center', label: 'Clave', labelExcel:'Clave', field: 'clave', sortable: true, headerClasses:'w70' },
                {name: 'nombre', align: 'left', label: 'Nombre', labelExcel:'Nombre', field: 'nombre', sortable: true },
                {name: 'descripcion', align: 'left', label: 'Descripción', labelExcel:'Descripcion', field: 'descripcion', sortable: false },
            ],
            filter: ref(''),
            mostrarFiltros: false,
            initialPagination: {
                // sortBy: 'desc',
                // descending: false,
                // page: 2,
                rowsPerPage: 25,
                // rowsNumber: xx if getting data from a server
            },
        }
    },

    mounted() {
        
    },

    methods: {
        abrirFiltros() {
            this.mostrarFiltros = !this.mostrarFiltros;
        },
        async exportarExcel() {
           herramientas.exportarCsv(this.columns, this.rows, 'inventario');
        }
    }
};
</script>