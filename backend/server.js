const express = require('express')
const mongoose = require('mongoose')
const adminRouter = require('./router/adminRouter')

const app = express()

mongoose.connect('mongodb://localhost:27017/tree',{
    useNewUrlParser:true,
    useUnifiedTopology :true
},()=>{
    console.log("DB connected");
})

app.use('/api',adminRouter)
const PORT = 4000

app.listen(PORT,
    console.log(`server started at port ${PORT}`)
)