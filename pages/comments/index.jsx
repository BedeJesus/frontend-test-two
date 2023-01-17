import { useState } from 'react'
import Pagination from '../../Components/Pagination/Pagination';
import { Container, AllComments, CommentCard, Top, Input } from './styles'


export default function Comments({ comments }) {

    const [currentPage, setCurrentPage] = useState(1)

    const commentsInPage = 35
    const lastCommentIndex = currentPage * commentsInPage
    const firstCommentIndex = lastCommentIndex - commentsInPage

    const [filter, setFilter] = useState('')
    const filteredComments = comments.filter((comments) => comments.name.toLowerCase().includes(filter.toLowerCase()))
    const currentComments = filteredComments.slice(firstCommentIndex, lastCommentIndex)


    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };


    return (
        <Container>

            <Top>

                <h1>Comments on posts</h1>
                <Input placeholder='Filter'
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />

            </Top>

            <AllComments>

                {currentComments.map((comment) => (

                    <CommentCard key={comment.id}>
                        <h1>{comment.name}</h1>
                        <p> <span>Resume:</span> {comment.body}</p>
                    </CommentCard>

                ))}

            </AllComments>

            <Pagination itensInPage={commentsInPage}
                totalItens={filteredComments.length}
                paginate={paginate}
            />


        </Container>
    )
}


export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/comments')
    const json = await res.json()

    return {
        props: {
            comments: json.comments
        }
    }
}