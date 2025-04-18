const { body, validationResult } = require('express-validator')
const validateData = [
    body('firstName').trim().isLength({ min: 3 }).withMessage("First name contains atleast 3 characters"),
    body('lastName').trim().isLength({ min: 3 }).withMessage("Last name must contains atleast 3 characters"),
    body('email').isEmail().withMessage("enter a valid email address"),
    body('password').trim().isLength({ min: 6 }).withMessage("password should contains atleast 6 characters"),
    body('passoutYear').trim().isInt({ min: 1990, max: 2025 }).withMessage("Passout Year must be in number"),
    body('qualification').trim().isAlphanumeric().withMessage("enter valid qualification"),
    body('contactNumber').trim().isNumeric().withMessage("Contact Number must contain numbers")
        .isLength({ min: 10, max: 10 }).withMessage(`   Contact Number should contain atLeast 10 numbers.Don't include 0 or +91`),
    body('designation').trim().notEmpty().withMessage("designation is important"),
    body("coverLetter").trim().isLength({ min: 5, max: 400 }).withMessage('cover letter should contain atleast 5 character but not more than 400'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(401).render('jobSeekerRegistration', { errors: errors.array() })
        }
        if (!req.file) {
            return res.status(401).render('jobSeekerRegistration', { errors: [{ msg: "File upload is required." }] })
        }
        next()
    }
]

//validation for recruiter registration page 

const validateRecruiterData = [
    body('fullname').trim().isLength({ min: 3 }).withMessage('Name should not be empty and should contain three characters'),
    body('company').trim().isLength({ min: 3 }).withMessage('company name should not be empty'),
    body('website').trim().notEmpty().withMessage('Website link should not be empty and contain atleast three charaters'),
    body('email').trim().isEmail().withMessage('enter a valid email address'),
    body('phone').trim().isLength({ min: 10, max: 10 }).withMessage("phone number should contain 10 digits")
        .isNumeric().withMessage("enter digit only"),
    body('password').isLength({ min: 6 }).withMessage('Password should 6characters long'),
    (req, res, next) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.render('recruiterRegister', { errors: errors.array() })
        }
        next()
    }
]
module.exports = { validateData, validateRecruiterData }


