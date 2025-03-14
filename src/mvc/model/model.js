const jobsList = [{
    id: 1,
    imgSrc: 'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png',
    companyName: "linkedin",
    designation: "SDE",
    package: '12LPA-13LPA',
    language: ['java', 'javascript', 'react.js', 'html'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 2,
    imgSrc: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png',
    companyName: "google",
    designation: "front-end developer",
    package: '9LPA-10LPA',
    language: ['javascript', 'react.js', 'html', 'tailwind css'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 3,
    imgSrc: "https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-transparent.png",
    companyName: "facebook",
    designation: "backend",
    package: '17LPA-18LPA',
    language: ['javascript', 'node.js', 'git', 'express.js', 'mongoDb'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 4,
    imgSrc: 'https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem-500x281.png',
    companyName: "swiggy",
    designation: "SDE",
    package: '12LPA-13LPA',
    language: ['java', 'javascript', 'react.js'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 5,
    imgSrc: "http://pngimg.com/uploads/android_logo/android_logo_PNG27.png",
    companyName: "android",
    designation: "android developer",
    package: '12LPA-13LPA',
    language: ['javascript', 'react.js', 'html', 'css'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 6,
    imgSrc: 'https://static.vecteezy.com/system/resources/previews/027/224/002/large_2x/spotify-3d-logo-free-png.png',
    companyName: "spotify",
    designation: "frontend developer",
    package: '12LPA-13LPA',
    language: ['javascript', 'react.js', 'html', 'css', 'ejs', 'angular'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 7,
    imgSrc: 'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png',
    companyName: "linkedin",
    designation: "SDE",
    package: '12LPA-13LPA',
    language: ['java', 'javascript', 'react.js', 'html'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 8,
    imgSrc: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-vector-graphic-pixabay-15.png',
    companyName: "google",
    designation: "front-end developer",
    package: '9LPA-10LPA',
    language: ['javascript', 'react.js', 'html', 'tailwind css'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 9,
    imgSrc: "https://s3.amazonaws.com/freebiesupply/large/2x/facebook-logo-transparent.png",
    companyName: "facebook",
    designation: "backend",
    package: '17LPA-18LPA',
    language: ['javascript', 'node.js', 'git', 'express.js', 'mongoDb'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 10,
    imgSrc: 'https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem-500x281.png',
    companyName: "swiggy",
    designation: "SDE",
    package: '12LPA-13LPA',
    language: ['java', 'javascript', 'react.js'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 11,
    imgSrc: "http://pngimg.com/uploads/android_logo/android_logo_PNG27.png",
    companyName: "android",
    designation: "android developer",
    package: '12LPA-13LPA',
    language: ['javascript', 'react.js', 'html', 'css'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}, {
    id: 12,
    imgSrc: 'https://static.vecteezy.com/system/resources/previews/027/224/002/large_2x/spotify-3d-logo-free-png.png',
    companyName: "spotify",
    designation: "frontend developer",
    package: '12LPA-13LPA',
    language: ['javascript', 'react.js', 'html', 'css', 'ejs', 'angular'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}]

const fetchAllJobs = () => {
    return jobsList
}
const allJobs = () => {
    const jobsId = jobsList.length > 0 ? Math.max(...jobsList.map(jobs => jobs.id)) + 1 : 1
    const newJobsAre = [...jobsList, jobsId]
    jobsList.push(newJobsAre)
    return newJobsAre
}
module.exports = {
    fetchAllJobs
}