import { useEffect, useState, useRef } from 'react'
import Card from '../Components/Card/Card'
import { Container, Carrousel, Loading } from './styles'
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row() {

    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const shouldLog = useRef(true)
    const desiredCharacters = [1, 4, 5, 13, 14, 20, 21, 22]


    // useEffect(() => {
    //     if (shouldLog.current) {

    //         async function getData() {
    //             shouldLog.current = false

    //             for (let i = 1; i <= 30; i++) {

    //                 if (i === 17) {
    //                     i++ //api doesnt have the 17º character
    //                 }

    //                 await axios.get(`https://swapi.dev/api/people/${i}`).then((response) => {
    //                     setPeople([...people, people.unshift(response.data)])
    //                     people.sort(function (a, b) {
    //                         return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;

    //                     });
    //                 })
    //             }
    //             setLoading(true)
    //         }

    //         getData()
    //     }
    // }, [])


    useEffect(() => {
        if (shouldLog.current) {

            async function getData() {
                shouldLog.current = false

                for (let i = 0; i <= desiredCharacters.length - 1; i++) {

                    await axios.get(`https://swapi.dev/api/people/${desiredCharacters[i]}`).then((response) => {
                        setPeople([...people, people.unshift(response.data)])
                    })
                }

                setLoading(true)
            }

            getData()
        }
    }, [])




    function SetSlidesPerView() {
        if (window.innerWidth <= 1000) {
            return 2
        } else {
            return 4
        }
    }

    return (
        <Container>

            {loading ? (

                <>

                    <h1>Main Characters</h1>

                    <Carrousel>


                        {console.log(people)}

                        <Card
                            person={people[6]}
                            description='The main character od the saga,son of Anakin Skywalker with princess Padmé. Became a Jedi to fight the Empire'
                            type={'character'}
                        />

                        <Card person={people[5]}
                            description='The villan of the saga, a great sith lord trained by Palpatine, used to be Anakin Skywalker, but after de convertion to the dark side became Darth Vader'
                            type={'character'}
                        />

                        <Card person={people[4]}
                            description='Princess Leia is Luke´s sister, daughter of Anakin Skywalker with Padmé and a great helper fot the Resistent rebelion against the Empire'
                            type={'character'}
                        />

                        <Card person={people[2]}
                            description='Han Solo was a human male smuggler. He became a leader in the Alliance to Restore the Republic and an instrumental figure in the defeat of the Galactic Empire'
                            type={'character'}
                        />

                        <Card person={people[3]}
                            description='Chewbacca, known affectionately to his friends as Chewie, was a Wookiee male warrior, smuggler, mechanic, pilot, and friend of Han Solo'
                            type={'character'}
                        />

                        {/* <Card person={people[0]}
                            description='Darth Sidious, known as the Emperor, was a Dark Lord of the Sith and Emperor of the Galactic Empire. He was the mentor of Darth Vader'
                            type={'character'}
                        /> */}

                        <Card person={people[1]}
                            description='Yoda was a legendary Jedi Master who led the Jedi Order in the years leading up to its destruction by the Sith. He was the mentor of Luke Skywalker'
                            type={'character'}
                        />



                    </Carrousel>

                    <h1>Main Terms</h1>
                    <Carrousel>

                        <Card type={'term'}
                            term_name={'The Force'}
                            description='The Force is an energy field created by all life that connected everything in the universe. The Jedi and the Sith uses its power. Its an energy field created by all living things. It surrounds us and penetrates us, it binds the galaxy together. '
                        />

                        <Card type={'term'}
                            term_name={'Jedi'}
                            description='A Jedi, also known by the title of Lord Jedi in ancient times, was a devotee to the ways of the Jedi Order, an ancient order of protectors united by their ability to harness the power of the Force. They use the power of the force for the good.'
                        />

                        <Card type={'term'}
                            term_name={'Sith'}
                            description='The Sith, also referred to as the Sith Order, was an ancient religious order of Force-wielders devoted to the dark side of the Force. Driven by their emotions, including hate, anger, and greed, the Sith were deceptive and obsessed with gaining power no matter the cost. '
                        />

                        <Card type={'term'}
                            term_name={'Lightsaber'}
                            description='The lightsaber was a weapon usually used by the Jedi, the Sith, and other Force-sensitives. Lightsabers consisted of a plasma blade, powered by a kyber crystal, that was emitted from a usually metal hilt and could be shut off at will.'
                        />

                        <Card type={'term'}
                            term_name={'The Resistance '}
                            description='The Resistance was a private paramilitary force that opposed the First Order, a military dictatorship that sought to restore the Galactic Empire. It was founded by General Leia Organa and was modelled to an extent on the Alliance to Restore the Republic. '
                        />

                    </Carrousel>

                </>

            ) : (
                <>
                    <Loading>Loading!</Loading>
                </>
            )}

        </Container>
    )
}