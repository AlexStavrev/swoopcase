import styled from "styled-components";
import React from 'react';
import PackList from '../components/PackList'
import NavBar from '../components/NavBar'

// Declare dummy data for the project
const DUMMY_PACKS = [
	{
		packname: 'Starter',
		amount: 4
	},
	{
		packname: 'Cursed',
		amount: 2
	},
	{
		packname: 'Shiny',
		amount: 1
	}
];

// Styled Components
export const Title = styled.h1`
	color: white;
  	font-weight: lighter;
  	margin: auto;
  	text-align: center;
 	font-size: ${(props: { fontSize: string; }) => props.fontSize ? props.fontSize : '1rem'};
`;
export const Wrapper = styled.div`
	margin: ${(props: { wrapSize: string; }) => props.wrapSize ? props.wrapSize : '1rem'};
`;

export default function Home() {
	const tabs: string[] = ['Home', 'Store', 'Marketplace', 'Dexicon']
	return (
		<React.Fragment>
			<NavBar tabs={tabs}></NavBar>
			<Wrapper wrapSize='4rem'>
				<Title fontSize='5rem'>My Inbox</Title>
				<Title fontSize='2.5rem'>Redeen your packs</Title>
			</Wrapper>
			<PackList packs={DUMMY_PACKS} />
		</React.Fragment>
	)
};
