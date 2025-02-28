const { fetchAllJobs } = require("../model/model")

const fetchMainPage = (req, res) => {
    res.render('home')
}

const allJobsAre = (req, res) => {
    const getAllJobsList = fetchAllJobs()
    res.render('jobs', { jobsResponse: getAllJobsList })
}
module.exports = {
    fetchMainPage, allJobsAre
}