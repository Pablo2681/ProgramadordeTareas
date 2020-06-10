import generarRecordatorio from './generarRecordatorio.js'
var fecha = new Date(2020, 5, 9, 21, 20, 0); // 0 es Enero, 11 es Diciembre.

generarRecordatorio.tareaProgramada(fecha, function enviarMail(){})

