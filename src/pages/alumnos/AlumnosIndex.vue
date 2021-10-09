<template>
    <q-page>
        <!-- HEADER -->
        <div class="row seccion-titulo">
            <div class="col-4">
                <div class="row titulo">Productos</div>
                <div class="row">
                    <q-breadcrumbs gutter="xs">
                        <q-breadcrumbs-el class="link" label="Home" to="/" />
                        <q-breadcrumbs-el class="link" label="Productos" />
                    </q-breadcrumbs>
                </div>
            </div>            
            <div class="col-8 text-right">
                <q-btn
                    color="primary"
                    dense
                    no-caps
                    icon-right="add"
                    aria-label="menu"
                    label="Agregar"
                    class="q-px-sm q-mr-md"
                    to="/productos/agregar"
                />
                <q-btn
                    color="primary"
                    dense
                    no-caps
                    icon-right="las la-file-csv"
                    aria-label="menu"
                    label="Exportar"
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
import { ref } from 'vue';
import HerramientasService from '../../services/HerramientasService';
const herramientas = new HerramientasService();

export default {
    name:'AlumnosIndex',
    data() {
        return {
            rows: [
                {matricula:"201027890", nombre:"Pedro Pérez Flores", descripcion:"Hello world..."},
                {matricula:"201027889", nombre:"Angélica Contreras Cruz", descripcion:"Hello world..."},
                {matricula:"201177891", nombre:"Alfonso Ortiz Sánchez", descripcion:""},
            ],
            columns: [
                {name: 'matricula', align: 'center', label: 'Matrícula', labelExcel:'Matricula', field: 'matricula', sortable: true, headerClasses:'w70', format: val => val ? val : '--' },
                {name: 'nombre', align: 'left', label: 'Nombre', labelExcel:'Nombre', field: 'nombre', sortable: true, format: val => val ? val : '--' },
                {name: 'descripcion', align: 'left', label: 'Descripción', labelExcel:'Descripcion', field: 'descripcion', sortable: false, format: val => val ? val : '--' },
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
        
        this.$notify('1message', 'advertencia');
        this.$notify('message2', 'error');
        this.$notify('message3', 'exito');

        this.$axios.get("http://api.test/prueba").then( resp => {
            console.log(resp);
        })
        .catch(error => console.log(error));
            
        this.$loader(true, 'Obteniendo información...');

        setTimeout(()=>{
            this.quitar()
        },2000);
    },

    methods: {
        quitar() {
            console.log('quitar');
            this.$loader(false);
        },
        abrirFiltros() {
            this.mostrarFiltros = !this.mostrarFiltros;
        },
        async exportarExcel() {
           herramientas.exportarCsv(this.columns, this.rows, 'inventario');
        }
    }
};
</script>