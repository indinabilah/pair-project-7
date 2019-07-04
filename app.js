const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/all-router')

const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.listen(port, () => console.log(`Server port ${port} is running`))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: true,
        maxAge: 100
     }
}))
app.get("/logout", (req, res)=>{
    req.session.destroy(err => {
        res.redirect("/user/login")
    })
})

app.use("/", router.User)
app.use("/", router.Transaction)
app.use("/", router.Ticket)
app.use("/", router.Movie)

app.get("/home", (req, res)=>{
    res.render("home.ejs")
})
