const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import program-related actions
const {browse,read} = require("../../../controllers/categoryAction");

// Route to get a list of programs
router.get("/",browse);

// Route to get one program
router.get("/:id",read)
/* ************************************************************************* */

module.exports = router;