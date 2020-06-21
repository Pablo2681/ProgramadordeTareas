//import generarRecordatorio from './programador.js'
//import { Job } from 'node-schedule';

//generarRecordatorio.programarTarea(fecha, function enviarMail(){})

import Programador from '/programador.js'

var fecha = new Date(2020, 5, 15, 23, 59, 0); // 0 es Enero, 11 es Diciembre.
var nombreTarea = '';

const p = new Programador();

p.
p.programarTarea(fecha, () => {})
p.programar("") // deberia fallar
p.programar("un nombre")
p.reprogramar("un nombre" ... ) // esto no deberia fallar
p.reprogramar("verdura" ... ) // esto deberia fallar

//idem cancelar

//crear regla de negocio ej: no se pueden crear mas de 2 tareas en simultaneo
//validacion de fecha anterior

/*

CU cancelacion

test:

p Programador

new CancelacionDeLicencia(p, .... ).ejecutar('tarea1')
// no deberia funcionar (deberia romperse)

p.programar('tarea1)

new CancelacionDeLicencia(p, .... ).ejecutar('tarea1')
// deberia funcionar (no deberia romperse)



*/