// Declare the action

const sayWelcome = (req, res) => {
    res.send("Welcome Chris to Wild Series !");
};

// Export it to import it somewhere else

module.exports = { sayWelcome };