import React from 'react'
import styled from 'styled-components'
import RpApp2 from '../assets/Images/RpApp2.png';
import { SiAdobexd } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa';

const BannerContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    background-color: var(--deep-dark);
    border-top: 1px solid var(--gray-2);
    border-bottom: 1px solid var(--gray-2);

    @media only screen and (max-width: 760px) {
        height: auto;
        padding: 3rem 0;
    }
`

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10%;

    @media only screen and (max-width: 760px) {
        flex-direction: column;
        gap: 2rem;
        padding: 0 2rem;
    }
`

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

const SloganTitle = styled.h2`
    margin: 0;
    font-size: 2rem;
    color: var(--white);
    font-weight: 700;
`

const Slogan = styled.p`
    margin: 0;
    font-size: 1rem;
    color: var(--gray-1);
    font-weight: 400;
`

const ButtonsDiv = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
    align-items: center;
`

const IconBtn = styled.button`
    background-color: transparent;
    border: 1px solid var(--gray-2);
    border-radius: 2rem;
    color: var(--white);
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover {
        border-color: var(--white);
    }

    svg {
        color: var(--white);
        font-size: 1rem;
    }
`

const ImageApp = styled.div`
    width: 160px;
    height: 160px;
    flex-shrink: 0;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
        border-radius: 28px;
    }

    @media only screen and (max-width: 760px) {
        width: 100px;
        height: 100px;
    }
`

function openNewTab(url) {
    window.open(url, '_blank');
}

function openSame(url) {
    window.location.href = url;
}

export default function RpAppBanner() {
    return (
        <BannerContainer>
            <ContentContainer>
                <SloganContainer>
                    <SloganTitle>Rp App</SloganTitle>
                    <Slogan>The reliance of school web portals is now gone and solved</Slogan>
                    <Slogan>as you get access to all in this app!</Slogan>
                    <ButtonsDiv>
                        <IconBtn onClick={() => openNewTab('https://xd.adobe.com/view/d9d25d4c-5c48-4ac1-af73-445c5c4b0463-8c81/screen/cfc4de97-da1c-422c-81b3-4fdb418181ad')}>
                            <SiAdobexd />
                        </IconBtn>
                        <IconBtn onClick={() => openSame('/#/rpapp')}>
                            <FaArrowRight />
                        </IconBtn>
                    </ButtonsDiv>
                </SloganContainer>
                <ImageApp>
                    <img src={RpApp2} alt="Rp App" />
                </ImageApp>
            </ContentContainer>
        </BannerContainer>
    )
}