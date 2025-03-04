const { body, validationResult } = require('express-validator')
const validateData = [
    body('firstName').trim().isLength({ min: 3 }).withMessage("First name contains atleast 3 characters"),
    body('lastName').trim().isLength({ min: 3 }).withMessage("Last name must contains atleast 3 characters"),
    body('email').isEmail().withMessage("enter a valid email address"),
    body('password').trim().isLength({ min: 6 }).withMessage("password should contains atleast 6 characters"),
    body('passoutYear').trim().isInt({ min: 1990, max: 2025 }).withMessage("Passout Year must be in number"),
    body('contactNumber').trim().isNumeric().withMessage("Contact Number must contain numbers")
        .isLength({ min: 10, max: 10 }).withMessage('Contact Number should contain atLeast 10 numbers'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(401).render('jobSeekerRegistration', { errors: errors.array() })
        }
        next()
    }
]

module.exports = { validateData }