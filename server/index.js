import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import twilio from 'twilio'
import cors from 'cors'
import bodyParser from 'body-parser'

import connectDB from './config/db.js'
import Alert from './models/Alert.js'

connectDB()

const app = express()
// const dotenv = require('dotenv')
// dotenv.config();

// setup body parser

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

const accountSID = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = twilio(accountSID, authToken)

app.use(
  cors({
    origin: '*',
  })
)

app.get('/test', (req, res) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      body: 'Bonjour ,ceci est un alerte',
      to: '+25776941794',
    })
    .then(() => {
      console.log('the message has been sent')
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/alert', async (req, res) => {
  console.log(req.body)
  let message = `un message d'alerte viens de vous etre envoye par l'hopital - ${req.body.hopital} : ${req.body.alert} 
  veuillez consulter la plateforme pour plus de details!
  `
  try {
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        body: message,
        to: '+25776941794',
      })
      .then(() => {
        console.log('the message has been sent')
      })
      .catch((err) => {
        console.log(err)
      })

    const newAlert = Alert.create({
      hopital: req.body.alert,
      alert: req.body.alert,
    })

    if (newAlert) {
      res.json(newAlert)
      console.log('newAlert')
      console.log(newAlert)
    } else {
      console.log('there is an error')
      res.status(404)
      throw new Error('')
    }
  } catch (error) {
    console.log(error)
  }
})

app.get('/alerts', async (req, res) => {
  let alerts = await Alert.find()

  res.json(alerts)
})

app.listen(process.env.PORT, () => {
  console.log(`the app is running on this port ${process.env.PORT}`)
})
