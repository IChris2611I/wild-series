// Declare the action
const sayWelcome = (req, res) => {
    res.send("I live on the SERVER SIDE" );
};

// Export it to import it somewhere else
module.exports = { sayWelcome };