const { fetchAllJobs } = require("../model/model")
const { getJobSeeker, addJobSeekerInList } = require("../model/registeredJobSeeker")
const { validationResult } = require('express-validator')

const fetchMainPage = (req, res) => {
    const getAllJobsList = fetchAllJobs()
    res.render('home', { jobsResponse: getAllJobsList.slice(0, 6) })
}

const allJobsAre = (req, res) => {
    const getAllJobsList = fetchAllJobs()
    res.render('jobs', { jobsResponse: getAllJobsList })
}

const jobseeker = (req, res) => {
    let response = getJobSeeker()
    res.json(response)
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
    // console.log(resume)
    const response = addJobSeekerInList(data)
    // console.log(response)
    return res.render('applicationSubmitted')
}

// for recruiter page controller is 
const getRecruiterPage = (req, res) => {
    res.render('recruiterRegister')
}

const getRecruiterLogin = (req, res) => {
    res.render('recruiterLogin')
}

module.exports = {
    fetchMainPage, allJobsAre, viewJobDetails, applyForJob, postRegistrationOfJobSeeker
    , jobseeker, getRecruiterPage, getRecruiterLogin
}