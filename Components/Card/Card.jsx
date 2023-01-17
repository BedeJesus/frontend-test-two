import { Container, Name, Description } from './styles'

export default function Card(props) {


    return (
        <>

            {props.type === 'character' ? (

                <Container>
                    <Name>{props.person.name.toLowerCase()}</Name>
                    <p> <span>Height:</span> {props.person.height}</p>
                    <Description> {props.description}</Description>
                    <p> <span>Skin Color: </span>{props.person.skin_color}</p>
                </Container>

            ) : (

                <Container>
                    <Name>{props.term_name}</Name>
                    <Description>{props.description}</Description>
                </Container>

            )}

        </>
    )
}


















