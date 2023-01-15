import Link from 'next/link';
import Toggle from '../Toggle/Toggle'
import { List, X } from 'phosphor-react'
import Sidebar from './SideBar/SideBar'
import { ThemeContext } from '../../pages/_app'
import { useContext } from 'react'
import { Container, Buttons, Togglee, SubMenu, StarWars, ToggleTwo, ToggleOne } from './styles'


export default function Menu({ toggleTheme }) {

    const { sideBar, showSideBar } = useContext(ThemeContext)



    return (
        <Container>

            <StarWars href='/'>Star Blog</StarWars>

            <Buttons>

                <ToggleOne>
                    <Toggle toggleTheme={toggleTheme} />
                </ToggleOne>

                <Link href='/users'>users</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/planets'>Colocar Aqui</Link>

            </Buttons>

            <SubMenu>

                <ToggleTwo>
                    <Toggle toggleTheme={toggleTheme} />
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











