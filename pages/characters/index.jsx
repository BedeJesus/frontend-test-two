import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import {Container, AllCharacters, CharacterCard, Loading} from './styles'

export default function Characters() {

    const [people, setPeople] = useState([])
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

                    await axios.get(`https://swapi.dev/api/people/${i}`).then((response) => {
                        setPeople([...people, people.unshift(response.data)])
                    })

                    await axios.get(`https://swapi.dev/api/planets/${i}`).then((response) => {
                        setPeople([...people,{
                           homeworld: response.data.name}])
                    })

                    console.log(people)
                }
                setLoading(true)
            }

            people.sort(function (a, b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

            })
            getData()
        }
    }, [])



    return (
        <Container>

            {loading ? (

                <>

                    <h1>Some Characters From the Saga</h1>

                    <AllCharacters>

                        {people.map((person) => (

                            <CharacterCard>
                                <h1>{person.name}</h1>
                                <p> <span>Gender:</span> {person.gender}</p>
                                <p> <span>Height:</span> {person.height}</p>
                                <p> <span>Mass:</span> {person.mass}</p>
                                <p> <span>Skin Color: </span> {person.skin_color}</p>
                                <p> <span>Hair Color: </span>{person.hair_color}</p>
                            </CharacterCard>
                        ))}

                    </AllCharacters>

                </>

            ) : (
                <>
                    <Loading>Loading!</Loading>
                </>
            )}
        </Container>
    )




}