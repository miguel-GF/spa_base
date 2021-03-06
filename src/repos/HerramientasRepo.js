
export default class herramientas {

  static wrapCsvValue (val, formatFn) {
    let formatted = formatFn !== void 0
      ? formatFn(val)
      : val
  
    formatted = formatted === void 0 || formatted === null
      ? ''
      : this.limpiarCadena(String(formatted))
  
    formatted = formatted.split('"').join('""')
    /**
     * Excel accepts \n and \r in strings, but some other CSV parsers do not
     * Uncomment the next two lines to escape new lines
     */
    // .split('\n').join('\\n')
    // .split('\r').join('\\r')
  
    return `"${formatted}"`
  }

  static limpiarCadena(cadena){
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
