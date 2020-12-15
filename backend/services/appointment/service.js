const appointmentRepository = require('../../repository/appointment')
const { AppointmentFactory, AppointmentError } = require('../../models/appointment/factory')

const init = async () => {
    await appointmentRepository.init()
    console.log('Appointment service has been successfully started')
}

const addAppointment = async (req, res, next) => {
    console.log(`Add appointment request from ${req.hostname}`)
    res.json('Adding appointment successful')
    return next()
}

init().catch(error => console.error(error))

module.exports = { addAppointment }
