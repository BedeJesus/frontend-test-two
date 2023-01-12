import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import { Container, PlanetCard, AllPlanets, Loading} from './styles'

export default function Planets() {

    const [planets, setPlanets] = useState([])
    const [loading, setLoading] = useState(false)
    const shouldLog = useRef(true)


    useEffect(() => {
        if (shouldLog.current) {
            async function getData() {
                shouldLog.current = false

                for (let i = 1; i <= 30; i++) {

                    if (i === 17) {
                        i++ //api doesnt have the 17 character
                    }

                    await axios.get(`https://swapi.dev/api/planets/${i}`).then((response) => {
                        setPlanets([...planets, planets.unshift(response.data)])

                        planets.sort(function (a, b) {
                            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

                        });
                    })
                }
                setLoading(true)
            }
            getData()
        }
    }, [])



    return (
        <Container>

            {loading ? (

                <>

                    <h1>Some Planets From the Saga</h1>
                    <AllPlanets>


                        {planets.map((planet) => (

                            <PlanetCard>
                                <h1>{planet.name}</h1>
                                <p> <span>Climate:</span> {planet.climate}</p>
                                <p> <span>Terrain:</span> {planet.terrain}</p>
                                <p> <span>gravity:</span> {planet.gravity}</p>
                                <p> <span>Population:</span> {planet.population}</p>
                                <p> <span>Rotation Pedriod:</span>{planet.rotation_period}h</p>
                            </PlanetCard>

                        ))}


                    </AllPlanets>

                </>

            ) : (
                <>
                    <Loading>Loading!</Loading>
                </>
            )}
        </Container>
    )




}