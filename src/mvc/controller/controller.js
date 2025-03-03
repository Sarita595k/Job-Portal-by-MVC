const { fetchAllJobs } = require("../model/model")
const { addJobSeekerInList } = require("../model/registeredJobSeeker")

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
    res.render('jobSeekerRegistration')
}

// to get all the data of registered jobseeker
const postRegistrationOfJobSeekrer = (req, res) => {
    const data = req.body
    const response = addJobSeekerInList(data)
    console.log(response)
}
module.exports = {
    fetchMainPage, allJobsAre, viewJobDetails, applyForJob, postRegistrationOfJobSeekrer
}