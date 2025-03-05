const { fetchAllJobs } = require("../model/model")
const { addJobSeekerInList } = require("../model/registeredJobSeeker")
const { validationResult } = require('express-validator')

const fetchMainPage = (req, res) => {
    res.render('home')
}

const allJobsAre = (req, res) => {
    const getAllJobsList = fetchAllJobs()
    res.render('jobs', { jobsResponse: getAllJobsList })
}


// to view job details
const viewJobDetails = (req, res) => {
    res.render('jobDetails')
}

// to view apply now page
const applyForJob = (req, res) => {
    res.render('jobSeekerRegistration', { errors: [] })
}

// to get all the data of registered jobseeker
const postRegistrationOfJobSeeker = (req, res) => {
    const data = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(401).render('jobSeekerRegistration', { errors: errors.array() })
    }
    if (!req.file) {
        return res.status(401).render('jobSeekerRegistration', { errors: [{ message: "File upload is required" }] })
    }
    const resume = req.file
    console.log(resume)
    const response = addJobSeekerInList(data)
    console.log(response)
    return res.json({ msg: "Successfully applied for the job" })
}
module.exports = {
    fetchMainPage, allJobsAre, viewJobDetails, applyForJob, postRegistrationOfJobSeeker
}