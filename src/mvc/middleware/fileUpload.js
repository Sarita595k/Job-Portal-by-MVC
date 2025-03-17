const multer = require('multer')
const path = require('path')
const fs = require('fs')

const fileUploadDest = path.join(__dirname, '..', '..', 'public', 'uploads', 'images')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const username = req.body.firstName
        const newFileUploadPath = path.join(fileUploadDest, username)
        if (!fs.existsSync(newFileUploadPath)) {
            fs.mkdirSync(newFileUploadPath, { recursive: true })
        }
        cb(null, newFileUploadPath)
    },
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + (path.extname(file.originalname)))
})

const fileFilter = (req, file, cb) => {
    let allowedFileType = ['application/pdf']
    if (allowedFileType.includes(file.mimetype)) {
        cb(null, true)
    } else {
        req.fileValidationError = "Invalid file type. Only PDF files are allowed.";
        cb(null, false)
    }
}

const upload = multer({ storage: storage, limits: { fileSize: 1 * 1024 * 1024 }, fileFilter: fileFilter })

module.exports = {
    upload
}