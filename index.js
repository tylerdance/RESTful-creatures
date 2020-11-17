const express = require('express')
const app = expess()
const layouts = require('express-ejs-layouts')

const dinoRouter = require('./controllers/dinoController')
const cryptRouter = require('./controllers/cryptController')


app.set('view engine', 'ejs')
app.use(layouts)
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/cryptids', cryptRouter)
app.use('/dinosaurs', dinoRouter)

app.listen(8000, () => {
    console.log('server is live');
})
