const Appointment = require('./appointment')
class AppointmentError extends Error {}

const AppointmentFactory = async ({ title, date, participants, location }) => {

    if (!title) {
        throw new AppointmentError("Missing title")
    }
    if (!date) {
        throw new AppointmentError("Missing date")
    }
    if (!participants) {
        throw new AppointmentError("Missing participants")
    }
    if (!location) {
        throw new AppointmentError("Missing location")
    }

    return Appointment({ title, date, participants, location });
}

module.exports = { AppointmentFactory, AppointmentError }