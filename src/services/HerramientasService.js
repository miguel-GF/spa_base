import { exportFile, Notify } from 'quasar';
import HerramientasRepo from '../repos/HerramientasRepo';

export default class herramientas {
    static exportarCsv(columns, rows, nombreArchivo) {
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
        Notify.create({
          message: 'El navegador denegó la descarga del archivo',
          icon: 'report_problem',
          color: 'negative',
          position: 'top',          
          actions: [
            { label: 'x', color: 'white', handler: () => { /* ... */ } },
          ],
        });
      }
      else {
        Notify.create({
          message: 'Archivo descargado correctamente',
          icon: 'thumb_up',
          color: 'positive',
          position: 'top',          
          actions: [
            { label: 'x', color: 'white', handler: () => { /* ... */ } },
          ],
        })
      }
  }
}
    

