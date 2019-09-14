 // ANCHOR Adding modules 
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

//ANCHOR  Assigning modules ang configuring
const app = express()
const port = process.env.PORT

// ANCHOR MIDDLEWARE FOR MENTAINANCE MODE
// app.use((req, res, next) => {
//     res.status(503).send('Site is in mentainance mode, please try later')
// })

// ANCHOR Telling express to use json data and routers
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// ANCHOR Confirming that express is working and server is up   
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})