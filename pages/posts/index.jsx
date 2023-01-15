import { useEffect, useState, useRef } from 'react'
import Pagination from '../../Components/Pagination/Pagination';

import { Container, AllPosts, PostCard, Loading } from './styles'


export default function Posts({ posts }) {

    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const postsInPage = 15

    const lastPostIndex = currentPage * postsInPage
    const firstPostIndex = lastPostIndex - postsInPage
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex)


    const paginate = pageNumber => {
        setCurrentPage(pageNumber)

    };


    return (
        <Container>


            {loading ? (

                <>
                    <h1>All Posts</h1>

                    <AllPosts>

                        {currentPosts.map((post) => (

                            <PostCard>
                                <h1>{post.title}</h1>
                                <p> <span>Resume:</span> {post.body}</p>
                            </PostCard>
                        ))}

                    </AllPosts>

                    <Pagination itensInPage={postsInPage}
                        totalItens={posts.length}
                        paginate={paginate}
                    />

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


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const json = await res.json()

    return {
        props: {
            posts: json.posts
        }
    }
}