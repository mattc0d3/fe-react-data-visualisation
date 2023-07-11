import { useEffect, useState } from 'react'
import MeteorCard from './MeteorCard'
import getMeteors from '../utils/meteors-api'
import getCoordinates from '../utils/coordinates-api'
import findClosestMeteorites from '../utils/findClosestMeteorites'

const ResultsList = ({ searchLocation }) => {
    const [meteors, setMeteors] = useState([])
    const [coords, setCoords] = useState({})
    let topResults = []

    useEffect(() => {
        getMeteors()
            .then(({ data }) => {
                setMeteors(data)
            })
    }, [])

    useEffect(() => {
        if (searchLocation) {
            console.log("getting coordinates....")
            getCoordinates(searchLocation)
                .then(response => {
                    setCoords({ lat: Number(response.lat), lon: Number(response.lon) })
                })
        }
    }, [searchLocation])

    if (coords.lat) {
        topResults = findClosestMeteorites(meteors, coords)
    }


    return <div id="list-container">
        <ul>
            {topResults.map((meteor) => {
                return < MeteorCard key={meteor.id} meteor={meteor} />
            })}
        </ul>
    </div>
}

export default ResultsList