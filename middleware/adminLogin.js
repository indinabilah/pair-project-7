module.exports = function(req,res,next) {
    console.log(req.session.user)
    if(req.session.user.role =='admin') {
        next()
    } else {
        throw new Error(`you have to be an admin to access this page`)
    }
}