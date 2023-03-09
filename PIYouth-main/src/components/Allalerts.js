import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Allalerts = () => {
  const [alerts, setAlert] = useState([])
  useEffect(() => {
    getAlerts()

    console.log('this is running once')
  }, [])

  const getAlerts = async () => {
    const getA = await axios.get('http://localhost:5000/alerts')
    console.log(getA)
    setAlert([...getA.data])
  }

  return (
    <div className='container'>
      <table class='table table-striped'>
        <thead>
          <tr>
            <th>Hopital</th>
            <th>Alert</th>
            <th>Recu</th>
            <th> Proche reponse</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => {
            return (
              <tr>
                <td>{alert.hopital}</td>
                <td>{alert.alert}</td>
                <td>{alert.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
