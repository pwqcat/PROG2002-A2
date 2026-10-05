/**
 * Defines API routes for the Charity Events project.
 *
 * @author Shixiang Tang
 * @version 1.0
 * @since 2026-10-04
 */
const eventDb = require("./event_db");
const express = require("express");

const connectionObj = eventDb.getConnection();
connectionObj.connect();

const router = express.Router();

/**
 * Receives a GET /events request, retrieves event data from the database, and returns it to the client.
 *
 * @param {Object} req The HTTP request object from the client, currently unused.
 * @param {Object} res The HTTP response object used to send data back to the client.
 */
router.get("/events", function (req, res) {
    connectionObj.query(
        "SELECT * FROM events JOIN categories ON events.event_category_id = categories.category_id WHERE event_date >= CURDATE() AND event_availability = 'Available';",
        function (err, results) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Oops, something went wrong on the server. Please try again later."
                });
            }
            res.json(results);
        }
    );
});

module.exports = router;