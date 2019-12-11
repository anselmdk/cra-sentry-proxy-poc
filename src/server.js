const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/hey', (req, res) => res.send('ho!'))

app.listen(8080)