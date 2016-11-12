const AWS = require('aws-sdk')

const s3 = new AWS.S3();

module.exports.save = (name, data, callback) => {
  
  const params = {
    Bucket: 'haystack-bucket',
    Key: `pizzas/${name}.png`,
    Body: new Buffer(data, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  };
  s3.putObject(params, (err, data) => {
    callback(err, `//s3-ap-southeast-2.amazonaws.com/haystack-bucket/${params.Key}`)
  })
};
