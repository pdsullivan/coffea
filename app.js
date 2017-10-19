let express = require('express');
let app = express();
let eventHandlerRoute = require('./routes/eventHandler');
let authCallbackRoute = require('./routes/authCallback');
let server = app.listen(process.env.PORT || 8080, function() {
    let port = server.address().port;
});

app.use('/', eventHandlerRoute);
app.use('/api/', eventHandlerRoute);
app.use('/api/', authCallbackRoute)

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
