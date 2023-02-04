const consoleLog=(req,res,next)=>{
        console.log('Statment from Practive-Middleware.js')
       res.send('Statment from Practive-Middleware.js')
       next()
 }
 
 module.exports=consoleLog