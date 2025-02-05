import { useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import { Container, AllUsers, UserCard, Top, Input } from './styles'

export default function Users({ users }) {

    const [currentPage, setCurrentPage] = useState(1)

    const usersInPage = 16
    const lastUserIndex = currentPage * usersInPage
    const firstUserIndex = lastUserIndex - usersInPage

    const [filter, setFilter] = useState('')
    const filteredUsers = users.filter((user) => user.first_name.toLowerCase().includes(filter.toLowerCase()))

    const currentUsers = filteredUsers.slice(firstUserIndex, lastUserIndex)

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)

    }

    return (
        <Container>

            <Top>

                <h1>users on the blog</h1>
                <Input placeholder='Filter'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

            </Top>

            <AllUsers>

                {currentUsers.map((user) => (

                    <UserCard key={user.id}>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <p> <span>User Name:</span> {user.username}</p>
                        <p> <span>Email:</span> {user.email}</p>
                        <p> <span>Gender:</span> {user.gender}</p>
                        <p> <span>Phone Number: </span> {user.phone_number.substr(0, 18)}</p>
                        <p> <span>Id: </span>{user.id}</p>
                    </UserCard>
                ))}

            </AllUsers>

            <Pagination itensInPage={usersInPage}
                totalItens={filteredUsers.length}
                paginate={paginate}
            />

        </Container >
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