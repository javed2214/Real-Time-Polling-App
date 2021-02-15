const mongoose = require('mongoose');

// Map global promises
// Mongoose Connect
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
  if(!err){
    console.log('DB Connected Successfully')
  } else{
    console.log('Error in DB Connectivity')
  }
})
