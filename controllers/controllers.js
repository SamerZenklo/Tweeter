const { Tweet } = require("../models/Tweet")

const home = (req, res) => {
    res.redirect('/tweet')
}
const addTweet = (req, res) => {
    if (req.method === "GET") {
        res.render('addTweet', {tweet: '', error:''})
    } else {
        const tweet = new Tweet(req.body)
        console.log(tweet)
        tweet.save()
        .then(()=> res.redirect('/tweet'))
        .catch(err =>{
            if (err!='')
            res.render('addTweet', {tweet: '', error: err.errors})
        })
    }
}

const getHomepage =  (req,res)=>{
    
    if (req.method === "GET") {
        Tweet.find()
            .then((result) => res.render('index', {data: result, error:''}))
            .catch((err) =>console.log(err))
    } else {
        const tweet = new Tweet(req.body)
        console.log(tweet)
        tweet.save()
            .then(() =>  res.redirect('/tweet'))
            .catch(err => {
                res.render('index', {data: '', error: err.errors})
            })
    }
    
    
}


const one_post = (req, res) => {
    Tweet.findById(req.params.id)
        .then((result) => res.render('oneTweet', {tweet: result}))
}
const delete_post = (req, res) => {
    Tweet.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
}

const update_post = (req, res) => {
    if (req.method === "GET") {
        Tweet.findById(req.params.id)
            .then((result) => res.render('editTweet', {tweet: result}))
            .catch((err) =>console.log(err))
    } else{

    Tweet.findByIdAndUpdate({_id: req.params.id})
        .then((result) => {
            result.title = req.body.title
            result.tweet = req.body.tweet
            result.save()
                .then(() => res.redirect('/tweet/'+ req.params.id)) 
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
}

module.exports = {
    home,
    addTweet,
    getHomepage,
    delete_post,
    one_post,
    update_post
}




