import Link from 'next/link';
import { useContext } from 'react'
import { MenuContext } from "../../../pages/_app"
import {Container,Options,  UserIcon,CommentIcon,PostIcon} from './styles'

export default function Sidebar() {

    const { sideBar, showSideBar } = useContext(MenuContext)


    return (
        <Container>

            <Options>

                <Link href='/users' onClick={showSideBar}> <UserIcon size={20} className='user' /> users</Link>
                <Link href='/posts' onClick={showSideBar}> <PostIcon size={20} className='book' /> Posts</Link>
                <Link href='/comments' onClick={showSideBar}> <CommentIcon size={20} className='planet' /> comments</Link>

            </Options>

        </Container>
    )
}