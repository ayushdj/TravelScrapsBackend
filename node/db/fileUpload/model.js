const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
                                  imgCollection: {
                                      type: Array
                                  }
                              }, {
                                  collection: 'images'
                              })

module.exports = mongoose.model('ScrapPostModel', imageSchema)