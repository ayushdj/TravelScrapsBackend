const dao = require('./dao')

module.exports = (app) => {

    const findCountCalendarByPersonId = (req, res) =>
        dao.findCountCalendarByPersonId(req.params.id)
            .then(calendar => res.json(calendar));

    app.get("/db/calendar/:id", findCountCalendarByPersonId);
}