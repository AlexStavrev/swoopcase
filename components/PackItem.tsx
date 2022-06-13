import styled from "styled-components";

const packDescriptions = {
    'Starter': 'Basic Beast Starter Pack',
    'Cursed': 'Cursed Black Pack',
    'Shiny': 'Shiny Gold'
}
const packPrices = {
    'Starter': 10,
    'Cursed': 300,
    'Shiny': 999
}

export const Card = styled.div`
    background-color: transparent;
    padding: 1rem 1rem 0rem 1rem;
    margin: auto;
    & hr {
        width:100%;
    }
    & img {
        width: 100px;
    }
`;
export const CardDescription = styled.section`
    display: inline-block;
    padding: 0.5rem 1rem;
    & h1 {
        color:  white;
        margin: .6rem 0rem;
        font-weight: lighter;
        font-size: 2rem;
    }
    & p {
        color: #3c3c3c;
        margin: 0;
        font-size: 1.4rem;
    }
`;
export default function PackItem(props: { name: string; amount: number; }) {
    return (
        <Card>
            <img src={`/${props.name}.png`} alt="Pack Image"/>
            <CardDescription>
                <h1>You received {props.amount} new pack{props.amount > 1 ? 's' : ''}</h1>
                <p>{packDescriptions[props.name]}</p>
                <p>USD ${props.amount * packPrices[props.name]}</p>
            </CardDescription>
            <hr />
        </Card>
    );
}