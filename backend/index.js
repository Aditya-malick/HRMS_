const express = require("express")
const path = require("path")
const cors = require("cors")
const db = require('./db')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
db()
app.use(cors({ origin: "*" }))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname , "public")))

app.use('/api/users' , require('./routes/createUser'))
app.use('/api/departments' , require('./routes/createDepartment'))
app.use('/api/departments' , require('./routes/createDepartment'))
app.use('/api/employee',require('./routes/getEmployee'))
app.use('/api/auth' , require('./routes/login'))
app.use('/api/announcement', require('./routes/anouncements'))
app.use('/api/attendance', require('./routes/attendence'))


const port = process.env.PORT || 3000 
app.listen(port, () => {
    console.log(`srver is running at localhost:${port}`)
})