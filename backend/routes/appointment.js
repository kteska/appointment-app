const appointmentService = require('../services/appointment/service')

const appointmentRoutes = (app) => {
    app.get('/appointment/add', appointmentService.addAppointment)
}

module.exports = appointmentRoutes