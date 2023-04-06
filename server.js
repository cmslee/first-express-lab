const express = require('express');
const app = express();

//* === Greetings ===
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}.`)
})


//tell the app to listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})