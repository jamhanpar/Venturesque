const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    return res.json({ msg: "this is the user route"})
});

module.exports = router;