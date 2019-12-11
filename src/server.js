const express = require('express')
const cors = require('cors')
const proxy = require('http-proxy-middleware')

const app = express()
app.use(cors())
app.get('/hey', (req, res) => res.send('ho!'))

// Sentry DSN
app.use(
  '/1854307',
  proxy({
    target: 'https://c3c72996d12b4cdfac24fe1e4900eca8@sentry.io/1854307',
    changeOrigin: true,
    logLevel: 'debug'
  })
)
// Sentry logging
app.use(
  '/api/1854307/store/',
  proxy({
    target: 'https://sentry.io/api/1854307/store/?sentry_key=c3c72996d12b4cdfac24fe1e4900eca8&sentry_version=7',
    changeOrigin: true,
    logLevel: 'debug'
  })
);




app.listen(8080)
