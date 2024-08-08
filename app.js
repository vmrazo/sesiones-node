import express from 'express'
import cors from 'cors';
import session from 'express-session'
import login from './route.js'


const app = express();

const PORT = 3001

app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
}))

app.use(cors())
app.use('/',login)

app.listen(PORT, (req, res) => {
    console.log('listening on '+PORT)
})

