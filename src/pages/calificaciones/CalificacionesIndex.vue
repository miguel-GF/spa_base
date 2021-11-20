<template>
    <q-page>
        <!-- HEADER -->
        <div class="row seccion-titulo">
            <div class="col-4">
                <div class="row titulo">Calificaciones</div>
                <div class="row">
                    <q-breadcrumbs gutter="xs">
                        <q-breadcrumbs-el class="link" label="Home" to="/" />
                        <q-breadcrumbs-el class="link" label="Calificaciones" />
                    </q-breadcrumbs>
                </div>
            </div>            
            <div class="col-8 text-right">                
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
                <!-- <q-slide-transition> -->
                <transition
                    appear
                    enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"      
                >
                    
                    <div v-show="mostrarFiltros" class="col-12 filtros-container q-my-md">
                        hola
                    </div>
                </transition>
      
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
                    ref="table"
                />
            </div>
        </q-scroll-area>
        
    </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
    name:'AlumnosIndex',
    data() {
        return {
            rows: [],
            columns: [
                {name: 'usuario', align: 'left', label: 'Nombre', labelExcel:'Nombre', field: 'nombre_usuario', sortable: true, format: val => val ? val : '--' },
                {name: 'materia', align: 'left', label: 'Materia', labelExcel:'Materia', field: 'nombre_materia', sortable: true, format: val => val ? val : '--' },
                {name: 'calificacion', align: 'center', label: 'Calificación', labelExcel:'Calificacion', field: 'calificacion', sortable: true, format: val => val ? val : '--' },
                {name: 'fecha',        align: 'center', label: 'Fecha', labelExcel:'Fecha', field: 'fecha', sortable: true, format: val => val ? val : '--' },
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
        this.cargaInicial();
    },

    methods: {
        abrirFiltros() {
            this.mostrarFiltros = !this.mostrarFiltros;
        },
        async cargaInicial() {
            this.$loader(true, 'Obteniendo información...');
            let session = localStorage.getItem("usuario");
            if(session) {
                await this.obtenerCalificaciones();
            }
            this.$loader(false);
        },
        async obtenerCalificaciones() {
            
            let params = {
                usuarioId: JSON.parse(localStorage.getItem("usuario")).usuario_id,
            };

            await this.$get("calificaciones/listarCalificaciones", {params})
            .then( resp => {
                console.log('respuesta');
                console.log(resp);
                this.rows = resp.data;
            })
            .catch(e => {
                this.$loader(false);
                let mensaje;
                if(e.status == 600) {
                    mensaje = e.mensaje;
                    this.$notify(mensaje, 'error');
                    localStorage.removeItem("token");
                    localStorage.removeItem("usuario");
                    return this.$router.push('/login');
                }
                else mensaje = e;
                this.$notify(mensaje, 'error');
            });
        },
        async exportarExcel() {
           let nombreArchivo = `calificaciones-${this.$moment().format('DD-MM-YYYY')}`;
           this.$excel.exportarCsv(this.columns, this.$refs.table.filteredSortedRows, nombreArchivo);
        }
    }
};
</script>