const { countReset } = require('console')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
dog = 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww'

app.set('view engine' , 'ejs')

app.set("views",path.join(__dirname,"/views"))

app.get('/',(req,res)=>{
    res.render("home.ejs")
})

app.get('/accounts/:username',(req,res)=>{
    let {username} = req.params 
    const instaData = require('./data.json')
    console.log(username);
    if(instaData.hasOwnProperty(username)){
        res.render("accounts.ejs" , {data : instaData[username]})
    }
    else{
        res.render("error.ejs")
    }
})





app.listen(port,()=>{
    console.log(`${port}`);
})