const express = require('express')
const app = express()
const port = 3001
const router = require('./routes/all-router')
const routerTicket = require('./routes/Ticket')
const routerMovie = require('./routes/movies') 

app.use(express.urlencoded({extended: false}))
app.listen(port, () => console.log(`Server port ${port} is running`))

app.use("/", router.User);
app.use("/ticket" ,routerTicket);
app.use("/movie" , routerMovie );
app.get("/home", (req, res)=>{
    res.render("home.ejs")
})