import { Container, Name, Description } from './styles'

export default function Card(props) {


    function CardType() {
        if (props.type === 'character') {

            return (

                <Container>
                    <Name>{props.person.name}</Name>
                    <p> <span>Height:</span> {props.person.height}</p>
                    <Description> {props.description}</Description>
                    <p> <span>Skin Color: </span>{props.person.skin_color}</p>

                </Container>
            )

        } else if (props.type === 'term') {

            return (

                <Container>
                    <Name>{props.term_name}</Name>
                    <Description> {props.description}</Description>
                </Container>
            )
        }
    }


    return (
        <>
            {CardType()}
        </>
    )
}


















