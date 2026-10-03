/**
 * Creates and runs the Express server for the Charity Events project.
 *
 * @author Shixiang Tang
 * @version 1.0
 * @since 2026-10-01
 */
const express = require("express");
const app = express();
const port = 8080;
/**
 * Sends a test message to the client.
 *
 * @param {Object} req The HTTP request object, currently unused.
 * @param {Object} res The HTTP response object used to send the response.
 */
app.get("/", function (req, res) {
    res.send("Hello from server");
});

app.listen(
    port,
    function () {
        console.log("Server is running on port " + port);
    }
);