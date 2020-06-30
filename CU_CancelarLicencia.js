import schedule from 'node-schedule'

class CU_CancelarLicencia {

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

    _validarEmp(data) {
        let empleado = await this.repoEmpleados.getByDni(data.dni)
        let licencia = await this.repoLicencias.getById (data.Licencias)

        if (empleado && licencia) {
            return true
        } else {
            return false
        }
    }

     cancelarTarea(nombreTarea){
     this._validarTarea(nombreTarea)
     schedule.cancelJob(nombreTarea)
     console.log('Tarea Cancelada:' + nombreTarea)
    }
}

export default CU_CancelarLicencia