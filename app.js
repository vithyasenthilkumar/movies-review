//console.log('app.js')
require('dotenv').config()
const express=require('express')
const app=express()
const PORT=3500
const moviesRouter=require('./routes/movies')

app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error',(errorMessage)=>console.log(errorMessage))
db.once('open',()=>console.log('connection established'))

app.get('/',(request,response)=>{
    response.send("welcome to movies section")
})

app.use('/api/v1/movies',moviesRouter)
app.listen(PORT,console.log(`Server runs at http://localhost:${PORT}`))