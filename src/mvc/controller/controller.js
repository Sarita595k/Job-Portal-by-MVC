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
    const response = addJobSeekerInList(data)
    return res.json({ message: "Successfully applied for the job" })
    console.log(response)
}
module.exports = {
    fetchMainPage, allJobsAre, viewJobDetails, applyForJob, postRegistrationOfJobSeeker
}