import schedule from 'node-schedule'

class CU_ReprogramarLicencia {

    constructor(repoEmpleados, repoLicencias, mailer){
        this.tareas = []
        this.empleados = repoEmpleados
        this.licencias = repoLicencias
        this.mailer = mailer
    }

    _validarTarea(nombreTarea) {
        
        if (nombreTarea != this.tareas){
            throw new Error('Nombre de Tarea Inexistente')
        } else {}
    }

    _validarFecha(fecha) {
        let fechaActual = new Date()
        if (fecha < fechaActual) {
            throw new Error('Fecha Ingresada Incorrecta')
        }
    }

    _validarEmp(data) {
        let empleado = await this.repoEmpleados.getByDni(data.dni)
        let licencia = await this.repoLicencias.getById (data.Licencias)

        if (empleado && licencia) {
            return true
        } else {
            return false
        }
                
    }

    reprogramarTarea(nombreTarea, fechaRep){
    schedule.rescheduleJob(nombreTarea, fechaRep)
    console.log('Tarea Reprogramada:' + nombreTarea)
    }

}

export default CU_ReprogramarLicencia