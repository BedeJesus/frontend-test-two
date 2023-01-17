import { useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import { Container, AllPosts, PostCard, Top, Input } from './styles'


export default function Posts({ posts }) {

    const [currentPage, setCurrentPage] = useState(1)

    const postsInPage = 15
    const lastPostIndex = currentPage * postsInPage
    const firstPostIndex = lastPostIndex - postsInPage

    const [filter, setFilter] = useState('')
    const filteredPosts = posts.filter((posts) => posts.title.toLowerCase().includes(filter.toLowerCase()))
    const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex)


    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };


    return (
        <Container>



            <Top>

                <h1>Posts on the blog</h1>
                <Input placeholder='Filter'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

            </Top>

            <AllPosts>

                {currentPosts.map((post) => (

                    <PostCard>
                        <h1>{post.title}</h1>
                        <p> <span>Resume:</span> {post.body}</p>
                    </PostCard>
                ))}

            </AllPosts>

            <Pagination itensInPage={postsInPage}
                totalItens={filteredPosts.length}
                paginate={paginate}
            />

        </Container>
    )
}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const json = await res.json()

    return {
        props: {
            posts: json.posts
        }
    }
}