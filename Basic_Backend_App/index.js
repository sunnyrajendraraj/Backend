require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send('Home Page for this Basic App')
})

app.get('/instagram',(req,res)=>{
    res.send('sunnyrajendraraj')
})

app.listen(port,(req,res)=>{
    console.log(`App Listening on port ${port}`)
})