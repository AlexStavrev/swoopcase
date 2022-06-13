import styled from "styled-components";
import Link from 'next/link';
import React, { useState } from "react";

export const NavList = styled.nav`
    color: #d6b122;
	font-size: 1.7rem;

    @media (min-width: 700px) {
        height: 80px;
    }
`;
export const NavTab = styled.a`
	margin: 0rem 1rem;
	padding: 1rem 2rem;
    @media (max-width: 700px) {
        display: none;
    }
`;
export const NavTabExtended = styled.a`
    margin: 0rem 1rem;
    padding: 1rem 2rem;
`;
export const NavBarMobileContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        display: none;
    }
`;
export const NavBarMobileButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;

    position:absolute;
    top:0;
    left:0;
    @media (min-width: 700px) {
        display: none;
    }
`;
export const NavBarInnerContainer = styled.div`
    
    overflow: hidden;
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 700px) {
        display: none;
    }
`;
export default function NavBar(props: { tabs: string[] }) {
    const [extendNavbar, setExtendNavbar] = React.useState();

    return (
        <NavList>
            <NavBarInnerContainer extendNavbar={extendNavbar}>
                {props.tabs.map((tab: string) => (
                    <NavTab key={tab}>{tab}</NavTab>
                ))}
            </NavBarInnerContainer>
            <NavBarMobileButton
                    onClick={() => {
                        setExtendNavbar((curr) => !curr);
                    }}>
                    {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </NavBarMobileButton>
            {extendNavbar && (
            <NavBarMobileContainer>
                {props.tabs.map((tab: string) => (
                    <NavTabExtended key={tab}>{tab}</NavTabExtended>
                ))}
            </NavBarMobileContainer>
            )}
        </NavList>
    );
}