//var schedule = require('node-schedule');
import schedule from 'node-schedule'

function tareaProgramada (fecha) {
    try {
        var job = schedule.scheduleJob(fecha, function(){
        console.log('Enviando Mail...'); 
        });
    } catch (error) {
        throw error.message;
    }
}
export default {
    tareaProgramada
}