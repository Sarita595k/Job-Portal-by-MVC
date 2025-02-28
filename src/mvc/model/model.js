const jobsList = [{
    id: 1,
    companyName: "coding ninjas",
    designation: "SDE",
    package: '12LPA-13LPA',
    language: ['java', 'javascript', 'react.js', 'html']
}, {
    id: 2,
    companyName: "genpact",
    designation: "front-end developer",
    package: '9LPA-10LPA',
    language: ['javascript', 'react.js', 'html', 'tailwind css']
}, {
    id: 3,
    companyName: "concentrix",
    designation: "backend",
    package: '17LPA-18LPA',
    language: ['javascript', 'node.js', 'git', 'express.js', 'mongoDb']
}, {
    id: 4,
    companyName: "hcl",
    designation: "SDE",
    package: '12LPA-13LPA',
    language: ['java', 'javascript', 'react.js',]
}, {
    id: 5,
    companyName: "zepto",
    designation: "frontend developer",
    package: '12LPA-13LPA',
    language: ['javascript', 'react.js', 'html', 'css']
}, {
    id: 6,
    companyName: "zomato",
    designation: "frontend developer",
    package: '12LPA-13LPA',
    language: ['javascript', 'react.js', 'html', 'css', 'ejs', 'angular']
}]

const fetchAllJobs = () => {
    return jobsList
}
// const allJobs = () => {
//     const jobsId = jobsList.length > 0 ? Math.max(...jobsList.map(jobs => jobs.id)) + 1 : 1
//     const newJobsAre = [...jobsList, jobsId]
//     jobsList.push(newJobsAre)
//     return newJobsAre
// }
module.exports = {
    fetchAllJobs
}