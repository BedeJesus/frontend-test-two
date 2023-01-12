import Link from 'next/link';
import Toggle from '../Toggle/Toggle'
import { List, X } from 'phosphor-react'
import Sidebar from './SideBar/SideBar'
import { ThemeContext } from '../../pages/_app'
import { useContext } from 'react'
import { Container, Buttons, Togglee, SubMenu, StarWars, ToggleTwo, ToggleOne } from './styles'


export default function Menu() {

    const { sideBar, showSideBar } = useContext(ThemeContext)



    return (
        <Container>

            <StarWars href='/'>Star Wars</StarWars>

            <Buttons>

                <ToggleOne>
                    <Toggle />
                </ToggleOne>



                <Link href='/characters'>Characters</Link>
                <Link href='/films'>Films</Link>
                <Link href='/planets'>Planets</Link>
            </Buttons>

            <SubMenu>

                <ToggleTwo>
                    <Toggle />
                </ToggleTwo>



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











