const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')

router.get('/', controller.home)
router.get('/addTweet', controller.addTweet)
router.post('/addTweet',controller.addTweet)
router.get('/tweet',controller.getHomepage)
router.post('/tweet',controller.getHomepage)
router.get('/tweet/:id',controller.one_post) 

router.get('/delete/:id',controller.delete_post)
router.get('/tweet/edit/:id',controller.update_post)
router.post('/tweet/edit/:id',controller.update_post)



module.exports = router