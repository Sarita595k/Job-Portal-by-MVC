const recruiters = []
const getRecruiterList = () => {
    return recruiters
}

const addRecruiters = (recruiterDetails) => {
    const id = recruiters.length > 0 ? Math.max(...recruiters.map(recruiter => recruiter.id)) + 1 : 1
    const newRecruiter = { id, ...recruiterDetails }
    recruiters.push(newRecruiter)
    return newRecruiter
}

const recruiterExist = ({ email, password }) => {
    const exists = recruiters.find(recruiter =>
        recruiter.email == email && recruiter.password == password
    ) || null
    return exists
}
module.exports = { getRecruiterList, addRecruiters, recruiterExist }