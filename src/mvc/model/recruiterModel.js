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
// check if email exists

const ifEmailAndCompanyExists = (data) => {
    const companyAndEmail = recruiters.find(details =>
        details.email === data.email || details.company === data.comapany || details.website === data.website) || null
    return companyAndEmail
}
const recruiterExist = ({ email, password }) => {
    const exists = recruiters.find(recruiter =>
        recruiter.email == email && recruiter.password == password
    ) || null
    return exists
}

const getRecruiterById = (id) => {
    return recruiters.find(recId => recId.id == id)
}
module.exports = { getRecruiterList, addRecruiters, recruiterExist, ifEmailAndCompanyExists, getRecruiterById }