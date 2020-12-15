const bcrypt = require('bcrypt')

const Appointment = ({ title, date, participants, location }) => {
    const appointment = {
        title, date, participants, location,
        dto: { title, date, participants, location }
    }
    return appointment
}

module.exports = { Appointment }