const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const uuidv4 = require('uuidv4');
const router = express.Router();

const DIR = 'db/fileUpload/public';

const storage = multer.diskStorage({
                                       destination: (req, file, cb) => {
                                           cb(null, DIR);
                                       },
                                       filename: (req, file, cb) => {
                                           const fileName = file.originalname.toLowerCase().split(' ').join('-');
                                           cb(null, uuidv4 + '-' + fileName)
                                       }
                                   });

const upload = multer({
                          storage: storage,
                          fileFilter: (req, file, cb) => {
                              if (file.mimetype === "image/png" || file.mimetype === "image/jpg"
                                  || file.mimetype === "image/jpeg") {
                                  cb(null, true);
                              } else {
                                  cb(null, false);
                                  return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
                              }
                          }
                      });

// Images model
let Image = require('./model');

router.post('/upload-images', upload.array('imgCollection', 6),
            (req,
             res, next) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (let i = 0; i < req.files.length; i++) {
        reqFiles.push(`${url}/public/${req.files[i].filename}`)
    }

    const image = new Image({
                              //_id: new mongoose.Types.ObjectId(),
                              imgCollection: reqFiles
                          });

    image.save().then(result => {
        res.status(201).json({
                                 message: "Done upload!",
                                 imageCreated: {
                                     //_id: result._id,
                                     imgCollection: result.imgCollection
                                 }
                             })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                                     error: err
                                 });
    })
})

router.get("/", (req, res, next) => {
    Image.find().then(data => {
        res.status(200).json({
                                 message: "Image list retrieved successfully!",
                                 images: data
                             });
    });
});

module.exports = router;