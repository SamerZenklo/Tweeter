const mongoose = require('mongoose')

const db = 'mongodb://localhost:27017/?readPreference=primary&article=MongoDB%20Compass&ssl=false'
mongoose.connect(db,{ useNewUrlParser:true,useUnifiedTopology:true})
.then((res) =>{console.log('connected to db')})
.catch( (err) => {console.log(err)})