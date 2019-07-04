const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/all-router')
const session = require('express-session')

app.use(express.urlencoded({extended: false}))
app.listen(port, () => console.log(`Server port ${port} is running`))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000000
     }
}))
app.get("/logout", (req, res)=>{
    req.session.destroy()
    // res.send(["Berhasil logout!"])
    res.redirect("/user/login")
})

app.use("/", router.User)
app.use("/", router.Transaction)
