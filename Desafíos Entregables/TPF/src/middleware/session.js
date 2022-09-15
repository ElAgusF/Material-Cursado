import session from 'express-session'

export const sessionHandler = session({
    secret: 'secretinho',
    resave: false,
    saveUninitialized: false
})
