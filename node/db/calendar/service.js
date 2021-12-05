const dao = require('./dao')

module.exports = (app) => {

    const findCountCalendarByPersonId = (req, res) =>
        dao.findCountCalendarByPersonId(req.params.id)
            .then(calendar => res.json(calendar));

    const createCalendar = (req, res) =>
        dao.createCalendar(req.body)
            .then((insertedCalendar) => res.json(insertedCalendar));

    const updateCalendar = (req, res) =>
        dao.updateCalendar(req.params.id, req.body)
            .then(status => res.send(status));

    app.post("/db/calendar", createCalendar);
    app.get("/db/calendar/:id", findCountCalendarByPersonId);
    app.put("/db/calendar/:id", updateCalendar);

}