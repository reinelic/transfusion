import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import twilio from 'twilio'
import cors from 'cors'

const app = express()
// const dotenv = require('dotenv')
// dotenv.config();

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
      body: 'hi reine , this is going well',
      to: '+25776941794',
    })
    .then(() => {
      console.log('the message has been sent')
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(process.env.PORT, () => {
  console.log(`the app is running on this port ${process.env.PORT}`)
})
