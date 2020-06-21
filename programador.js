import schedule from 'node-schedule'

// var schedule = require('node-schedule');

/* function programarTarea (fecha) {
    try {
        var job = schedule.scheduleJob(fecha, function(){
        console.log('Enviando Mail...'); 
        });
    } catch (error) {
        throw error.message;
    }

} */

class Programador {

    constructor(){
        }

    validarFecha(fecha) {
        let fechaActual = new Date()
        if (fecha < fechaActual) {
            throw new Error('Fecha Ingresada Incorrecta')
        }
    }
    programarTarea(nombreTarea, fecha, tareaParaProgramar){
        validar(fecha, tareaParaProgramar)
        const job = schedule.scheduleJob(nombreTarea,fecha, tareaParaProgramar)
        this.tareas[nombre] = job.id

    }
    reprogramarTarea(nombreTarea, fecha, tareaParaModificar){
        validar(idTarea, fecha, tareaParaModificar)
        schedule.scheduleJob(idTarea, fecha, tareaParaModificar)
        
    }
    cancelarTarea(nombreTarea, fecha, tareaParaCancelar){
        validar(idTarea, tareaParaCancelar)
        let jobCanc = schedule.scheduleJob(nombreTarea,fecha, tareaParaProgramar)
        jobCanc.cancel(nombreTarea)
        schedule.scheduleJob(idTarea, tareaParaCancelar)
    }
};

export default Programador





