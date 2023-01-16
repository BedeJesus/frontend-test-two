
import { Container } from './styles'

export default function Pagination({ itensInPage, totalItens, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItens / itensInPage); i++) {
        pageNumbers.push(i);
    }

    return (

        <nav>
            <Container>
                {pageNumbers.map(number => (
                    <div key={number} >
                        <button onClick={() => paginate(number)&& console.log('clicou')}  >
                            {number}
                        </button>
                    </div>
                ))}
            </Container>
        </nav>

    )
}

