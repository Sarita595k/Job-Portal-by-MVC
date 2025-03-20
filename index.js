const express = require('express')
const ejs = require('ejs')
const path = require('path')
const multer = require("multer")
const { fetchMainPage, allJobsAre, viewJobDetails,
    applyForJob, postRegistrationOfJobSeeker, jobseeker,
    getRecruiterPage, getRecruiterLogin, getRecruiterDetails,
    postRecruiterRegister, checkRecruiterExist, viewJob }
    = require('./src/mvc/controller/controller')
const { validateData } = require('./src/mvc/middleware/validator')
const { upload } = require('./src/mvc/middleware/fileUpload')
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

app.use('/uploads', express.static('uploads'))

// setting all the routes here 

// fetching home page
app.get('/', fetchMainPage)

// fetching jobs page
app.get('/allJobs', allJobsAre)

// to fetch job details 
app.get('/jobDetails', viewJobDetails)

app.get('/viewJob/:id', viewJob)
// to fetch apply now page
app.get('/applyNow', applyForJob)

// post registration of jobSeeker
app.post('/jobSeekerRegister', upload.single('resume'), validateData, ((req, res, next) => {
    if (req.fileValidationError) {
        return res.render('jobSeekerRegister', { errors: [{ msg: req.fileValidationError }] })
    }
    next()
}), postRegistrationOfJobSeeker)


app.get('/jobseekerList', jobseeker)
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === '"LIMIT_FILE_SIZE"') {
            return res.status(401).render('jobSeekerRegistration', { errors: [{ msg: "file size exceeds 2MB" }] })
        }
        if (!req.file) {
            return res.status(401).render('jobSeekerRegistration', { errors: [{ msg: "File upload is required" }] })
        }
    }
    next(err)
})


// recruiter page 
app.get('/recruiterRegister', getRecruiterPage)

app.get('/recruiterLogin', getRecruiterLogin)

app.get('/recruiterDetails', getRecruiterDetails)

app.post('/recruiterRegister', postRecruiterRegister)

app.post('/recruiterLogin', checkRecruiterExist)
app.listen(3000, () => {
    console.log("server is running at port 3000")
})