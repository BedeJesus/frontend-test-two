import { useEffect, useState, useRef } from 'react'
import Pagination from '../../Components/Pagination/Pagination';

import { Container, AllFilms, FilmCard, Loading } from './styles'


export default function Posts({ posts }) {

    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const postsInPage = 15

    // Get current posts
    const lastPostIndex = currentPage * postsInPage;
    const firstPostIndex = lastPostIndex - postsInPage;
    const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)

    };


    return (
        <Container>


            {loading ? (

                <>
                    <h1>All Films</h1>

                    <AllFilms>

                        {currentPosts.map((post) => (

                            <FilmCard>
                                <h1>{post.title}</h1>
                                <p> <span>Resume:</span> {post.body}</p>
                            </FilmCard>
                        ))}

                    </AllFilms>

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