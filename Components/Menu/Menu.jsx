import Link from 'next/link';
import Toggle from './Toggle'
import { List, X } from 'phosphor-react'
import Sidebar from './SideBar/SideBar'
import { ThemeContext } from '../../pages/_app'
import { useContext } from 'react'
import {Container,Buttons,Togglee,SubMenu, StarWars} from './styles'


export default function Menu() {

    const {sideBar,showSideBar} = useContext(ThemeContext)



    return (
        <Container>

            <StarWars href='/'>Star Wars</StarWars>

            <Buttons>

                <Toggle />
                <Link href='/characters'>Characters</Link>
                <Link href='/films'>Films</Link>
                <Link href='/planets'>Planets</Link>

            </Buttons>

            <SubMenu>
                <Togglee>
                    <Toggle />
                </Togglee>

                {sideBar ? (
                    <>
                        <button onClick={showSideBar}><X size={40} /></button>
                        <Sidebar />
                    </>
                ) : (
                    <button onClick={showSideBar}><List size={40} /></button>
                )}

            </SubMenu>
        </Container>
    )
}











