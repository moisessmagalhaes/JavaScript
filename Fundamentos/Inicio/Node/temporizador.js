const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * *', function () {
    console.log('Executando tarefa 1...', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa1...')
},10000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa2...', new Date().getSeconds())
})