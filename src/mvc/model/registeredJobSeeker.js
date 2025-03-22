const jobSeekerList = []
const getJobSeeker = () => {
    return jobSeekerList
}

const addJobSeekerInList = (data) => {
    const id = jobSeekerList.length > 0 ? Math.max(...jobSeekerList.map(jobSeeker => jobSeeker.id)) + 1 : 1
    const newJobSeeker = { id, ...data }
    jobSeekerList.push(newJobSeeker)
    // console.log(newJobSeeker)
    return newJobSeeker
}


module.exports = { getJobSeeker, addJobSeekerInList, ifEmailAndCompanyExists }