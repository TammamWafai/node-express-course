const express= require('express')
const app= express()
const {products, people}=require('./data')

app.listen(5000,()=>{
    console.log('Server running...')
})

app.get('/',(req,res)=>{
    res.json(products)
})