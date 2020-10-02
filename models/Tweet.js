const mongoose = require('mongoose')
const Schema = mongoose.Schema


const tweetSchema = new Schema({
    title :{
        type:String,
        required:true,
        minlength:20
    },
    tweet :{
        type:String,
        required:true,
        minlength:1,
        maxlength: 50
    } 
},{timestamps:true})
const Tweet = mongoose.model('Tweet',tweetSchema)

module.exports ={
    Tweet
}