import { useEffect, useState, useRef } from 'react'
import { Container, AllFilms, FilmCard, Loading } from './styles'
import axios from 'axios'


export default function Films() {


    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const shouldLog = useRef(true)


    useEffect(() => {
        if (shouldLog.current) {
            async function getData() {
                shouldLog.current = false

                for (let i = 1; i <= 6; i++) {

                    await axios.get(`https://swapi.dev/api/films/${i}`).then((response) => {
                        setFilms([...films, films.unshift(response.data)])
                        console.log(films)
                    })
                }
                setLoading(true)
            }
            films.sort(function (a, b) {
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

            });
            getData()

        }
    }, [])



    return (
        <Container>


            {loading ? (

                <>
                    <h1>All Films</h1>

                    <AllFilms>

                        {films.map((film) => (

                            <FilmCard>
                                <h1>{film.title}</h1>
                                <p> <span>Director:</span> {film.director}</p>
                                <p> <span>Resume:</span> {film.opening_crawl}</p>
                                <p> <span>Release Date:</span> {film.release_date}</p>
                            </FilmCard>
                        ))}

                    </AllFilms>

                </>

            ) : (
                <>
                    <Loading>Loading!</Loading>
                </>
            )
            }
        </Container>
    )
}