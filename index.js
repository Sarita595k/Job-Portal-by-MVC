import express from 'express'
import ejs from 'ejs'
import path from 'path'
const app = express()


//setting view engine as ejs to display pages
app.set('view engine', 'ejs')
// setting the path of the views folder
app.set('views', path.join(__dirname, 'src', 'mvc', 'views'))

// setting middleware for the static files
app.use(express.static(path.join(__dirname, 'public')))
// setting urlencoded so that able to capture the form data
app.use(express.urlencoded({ extended: true }))
// setting middleware to get form data in the form of json
app.use(express.json())