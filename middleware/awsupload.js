// Depedencies
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');




// Set Amazon Uploading Engine
const s3 = new AWS.S3({
    // accessKeyId: process.env.ACCESS_KEY_ID,
    // secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: 'AKIARPAJ3IHZ3YDTRXNY',
        secretAccessKey: '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',
    region:'us-east-1'
});

// Init Upload AWS
const uploads3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'anandbro1234',
        acl:'public-read',
        key: (req, file, cb) => {
            console.log(file);
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
});

module.exports = uploads3;