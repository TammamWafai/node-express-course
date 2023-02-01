const express=require('express')
const app=express()

app.listen(5000,()=>{
    console.log('Sever is listening...')
})

app.get('/',(req,res)=>{
    res.status(200).send('Home page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})