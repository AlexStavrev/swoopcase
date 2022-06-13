import styled from "styled-components";
import PackItem from './PackItem'

export const ClaimButton = styled.button`
    background-color: #fefe95;
    border-radius: 10px;
    padding: 0.4rem 0.7rem;
    margin: 8px;
    color: #a85714;
    border: 2px solid #a85714;
    font-family: PixelarRegularW01-Regular;
    font-size: 1.3rem;

    &:hover {
        background-color: #ecec41;
        transition: 250ms;
    }
`;

export default function PackList(props: { packs: { packname: string; amount: number; }[]; }) {
    return (
        <ul>
            {props.packs.map((pack: { packname: string; amount: number; }) => (
                <PackItem key={pack.packname}
                    name={pack.packname}
                    amount={pack.amount}
                />
            ))}
            <ClaimButton>CLAIM ALL</ClaimButton>
        </ul>
    );
}