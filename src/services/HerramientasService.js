import { exportFile, useQuasar } from 'quasar';
import HerramientasRepo from '../repos/HerramientasRepo';

export default class herramientas {
    exportarCsv(columns, rows, nombreArchivo) {
            // naive encoding to csv format
            const content = [columns.map(col => HerramientasRepo.wrapCsvValue(col.labelExcel))].concat(
                rows.map(row => columns.map(col => HerramientasRepo.wrapCsvValue(
                  typeof col.field === 'function'
                    ? col.field(row)
                    : row[ col.field === void 0 ? col.name : col.field ],
                  col.format
                )).join(','))
              ).join('\r\n')
      
              const status = exportFile(
                `${nombreArchivo}.csv`,
                content,
                'text/csv'
              )
      
              if (status !== true) {
                $q.notify({
                  message: 'Browser denied file download...',
                  color: 'negative',
                  icon: 'warning'
                })
              }
        }
}
    

