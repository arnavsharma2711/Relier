require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cros = require('cors')
const cookieParser = require('cookie-parser')
const { cookie } = require('express/lib/response')


const app = express()
app.use(express.json())
app.use(cros())
app.use(cookieParser())

const URL = process.env.MONGODB_URL
mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});
app.get('/', (req,res) => {
    res.json({ msg: "Hello" })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port ',port)
})