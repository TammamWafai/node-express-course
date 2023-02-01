const express= require('express')
const app=express()
const path=require('path')

app.use(express.static('./public'))

app.listen(5000,()=>{
    console.log('Sever running...');
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.get('*',(req,res)=>{
    res.status(404).send('Not found')
})