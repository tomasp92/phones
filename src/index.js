const express = require('express')
const morgan = require('morgan')
const app = express()
const path = require('path')

app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())


//Routes
app.use('/api/phones/', require('./routes/index.routes'))

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//Comenzar servidor
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})

module.exports = app
