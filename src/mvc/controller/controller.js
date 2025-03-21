const { fetchAllJobs, getJobById } = require("../model/model")
const { getJobSeeker, addJobSeekerInList } = require("../model/registeredJobSeeker")
const { getRecruiterList, addRecruiters, recruiterExist } = require('../model/recruiterModel')
const { validationResult } = require('express-validator')
// const express = require("express")

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

// view a specfic job 
const viewJob = (req, res) => {
    const query = parseInt(req.params.id)
    const jobs = getJobById(query)
    if (!jobs) {
        return res.status(404).send("Job not found");
    }
    res.render('jobDetails', { job: jobs })
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
    res.render('recruiterRegister', { errors: [] })
}

const getRecruiterLogin = (req, res) => {
    res.render('recruiterLogin', { errors: [] })
}

const getDashboardPage = (req, res) => {
    res.render('dashboard')
}

// for getting details of all the recruiters 
const getRecruiterDetails = (req, res) => {
    const data = getRecruiterList()
    res.json(data)
}
const postRecruiterRegister = (req, res) => {
    const response = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.render('recruiterRegister', { errors: errors.array() })
    }
    addRecruiters(response)
    const id = parseInt(req.params.id)
    res.redirect('/dashboard')
}

const checkRecruiterExist = (req, res) => {
    const { email, password } = req.body
    console.log({ email, password })
    const response = recruiterExist({ email, password })
    if (!response) {
        res.redirect('/recruiterLogin', { errors: [{ msg: "invalid credentials" }] })
    }
    res.redirect("/dashboard")
}
module.exports = {
    fetchMainPage, allJobsAre, viewJobDetails, applyForJob, postRegistrationOfJobSeeker
    , jobseeker, getRecruiterPage, getRecruiterLogin,
    getRecruiterDetails, postRecruiterRegister, checkRecruiterExist, viewJob
    , getDashboardPage
}