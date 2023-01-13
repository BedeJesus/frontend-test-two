import Link from 'next/link';
import { User, Book, Planet } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from "../../../pages/_app"
import {Container,Options} from './styles'

export default function Sidebar() {

    const { sideBar, showSideBar } = useContext(ThemeContext)


    return (
        <Container>

            <Options>

                <Link href='/users' onClick={showSideBar}> <User size={20} className='user' />  Users</Link>
                <Link href='/posts' onClick={showSideBar}> <Book size={20} className='book' /> Posts</Link>
                <Link href='/planets' onClick={showSideBar}> <Planet size={20} className='planet' /> Planets</Link>

            </Options>

        </Container>
    )
}