import { useEffect, useState, useRef } from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import { Container, AllCharacters, CharacterCard, Loading } from './styles'

export default function Users({ users }) {

    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const usersInPage = 16


    // Get current posts
    const lastUserIndex = currentPage * usersInPage;
    const firstUserIndex = lastUserIndex - usersInPage;
    const currentUsers = users.slice(firstUserIndex, lastUserIndex);

    // Change page
    const paginate = pageNumber =>{
        setCurrentPage(pageNumber)
        
    } ;

    return (
        <Container>

            {loading ? (

                <>
                    <h1>users in the blog</h1>

                    <AllCharacters>

                        {currentUsers.map((user) => (

                            <CharacterCard key={user.id}>
                                <h1>{user.first_name} {user.last_name}</h1>
                                <p> <span>User Name:</span> {user.username}</p>
                                <p> <span>Email:</span> {user.email}</p>
                                <p> <span>Gender:</span> {user.gender}</p>
                                <p> <span>Phone Number: </span> {user.phone_number}</p>
                                <p> <span>Id: </span>{user.id}</p>
                            </CharacterCard>
                        ))}

                    </AllCharacters>

                    <Pagination itensInPage={usersInPage}
                        totalItens={users.length}
                        paginate={paginate}
                    />
                </>

            ) : (
                <>
                    <Loading>Loading!</Loading>
                </>
            )}
        </Container>
    )

}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/users')
    const json = await res.json()

    return {
        props: {
            users: json.users
        }
    }
}