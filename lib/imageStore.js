'use strict';

const fileStore = require('./imageStoreFile');
const s3store = require('./imageStoreS3');

function saveImage (name, base64String, callback) {
  let imageData = base64String.split('data:image/png;base64,')[1];
  s3store.save(name, imageData, callback);
}

module.exports.saveImage = saveImage;
