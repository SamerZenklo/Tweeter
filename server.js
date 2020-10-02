const express = require('express')
  
const app = express()
const router = require('./config/router')
require('./config/mongoose')
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))

app.use(router) 
app.listen(2000)