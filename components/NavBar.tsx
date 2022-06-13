import styled from "styled-components";

export const NavList = styled.div`
	overflow: hidden;
	color: #d6b122;
	font-size: 1.7rem;
	text-align: center;
`;
export const NavTab = styled.a`
	margin: 1rem;
	padding: 2rem;
`;
export default function NavBar(props: { tabs: string[] }) {
    return (
        <NavList>
            {props.tabs.map((tab: string) => (
                <NavTab key={tab}>{tab}</NavTab>
            ))}
        </NavList>
    );
}