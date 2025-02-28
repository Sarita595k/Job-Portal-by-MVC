const express = require('express')
const ejs = require('ejs')
const path = require('path')
const { fetchMainPage, allJobsAre } = require('./src/mvc/controller/controller')
const app = express()


//setting view engine as ejs to display pages
app.set('view engine', 'ejs')
// setting the path of the views folder
app.set('views', path.join(__dirname, 'src', 'mvc', 'views'))

// setting middleware for the static files
app.use(express.static(path.join(__dirname, 'src', 'public')))
// setting urlencoded so that able to capture the form data
app.use(express.urlencoded({ extended: true }))
// setting middleware to get form data in the form of json
app.use(express.json())


// setting all the routes here 

// fetching home page
app.get('/', fetchMainPage)

// fetching jobs page
app.get('/allJobs', allJobsAre)

app.listen(3000, () => {
    console.log("server is running at port 3000")
})