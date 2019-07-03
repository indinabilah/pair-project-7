const express = require('express')
const app = express()
const port = 3001
const router = require('./routes/all-router')
const session = require('express-session')

app.use(express.urlencoded({extended: false}))
app.listen(port, () => console.log(`Server port ${port} is running`))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: true
     }
}))
// app.get("/home", (req, res)=>{
//     req.sessionID = null
//     if(req.sessionID){
//         // res.send([req.sessionID])
//         res.render("home.ejs")
//     }else{
//         res.send([req.session, req.sessionID, 'Login dulu'])
//     }
// })

app.use("/", router.User)