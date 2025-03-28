const session = require('express-session')
// session and cookies added 
const expressSession = session({
    secret: "my-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30000 }
})

module.exports = { expressSession }