import express from "express";
import router from "./routes/products";
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
const exphbs = require('express-handlebars')

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname : '.hbs'
}))
app.set('view engine', '.hbs')
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(router)
export default app