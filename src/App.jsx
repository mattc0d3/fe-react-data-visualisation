import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import Header from "./components/Header"
import InfoBar from './components/InfoBar'
import ResultsList from './components/ResultsList'
import SearchBar from "./components/SearchBar"
import './App.css'

function App() {
  const [searchLocation, setSearchLocation] = useState("")
  return (
    <div id="app-container">
      < Header />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      < InfoBar searchLocation={searchLocation} />
      < ResultsList searchLocation={searchLocation} />
      < SearchBar setSearchLocation={setSearchLocation} />
    </div>
  )
}

export default App
