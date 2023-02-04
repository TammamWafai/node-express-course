const express=require('express')
const app=express()
const path=require('path')
const practiceMiddleware=require('./practice-middleware')

app.use(practiceMiddleware)

app.listen(3000,()=>{
    console.log('Server running...')
})

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./new-public/index.html'))
})

app.get('/sample',(req,res)=>{
    res.status(200).send('This is working.')
})
