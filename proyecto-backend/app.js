const app = require('express')();
const express = require('express');
const cors = require('cors');
const port = 3005;
//const middleware = require('./middleware/logger');
//app.use(middleware.logger);

app.use(express.json()); // for parsing application/json
app.use(cors()); // for solution same enviroments in apps
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/contacts', require('./routes/contact_routes'));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});

// app.js (inicializar) -> middleware -> routes -> services -> infraestructure -> database