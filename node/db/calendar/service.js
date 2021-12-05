const dao = require('./dao')

module.exports = (app) => {

    const findCountCalendarByPersonId = (req, res) =>
        dao.findCountCalendarByPersonId(req.params.id)
            .then(calendar => res.json(calendar));

    const createCalendar = (req, res) =>
        dao.createCalendar(req.body)
            .then((insertedCalendar) => res.json(insertedCalendar));

    app.post("/db/calendar", createCalendar);
    
    app.get("/db/calendar/:id", findCountCalendarByPersonId);
}