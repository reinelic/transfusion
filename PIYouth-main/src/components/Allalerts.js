import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { alert } from 'react-bootstrap-icons'

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
    <div className='container pt-4'>
      <h6 className='text-info font-weigth-bold'>
        {' '}
        <alert></alert> Les alerts en cours :
      </h6>
      <table class='table table-striped  '>
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

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
