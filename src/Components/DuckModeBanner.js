import React from 'react'
import styled from 'styled-components'
import DuckModeIcon from '../assets/Images/DuckModeIcon.png';
import { Marginer } from './marginer';
import { GrAppleAppStore } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa';

const BannerContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    background-color: var(--banner-bg);
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

export default function DuckModeBanner() {
    return (
        <BannerContainer>
            <ContentContainer>
                <SloganContainer>
                    <SloganTitle>DuckMode</SloganTitle>
                    <Slogan>Find & Discover your desired colours with DuckMode</Slogan>
                    <Slogan>as you design or code</Slogan>
                    <ButtonsDiv>
                        <IconBtn onClick={() => openNewTab('https://apps.apple.com/sg/app/duckmode/id1586440491?mt=12')}>
                            <GrAppleAppStore />
                        </IconBtn>
                        <IconBtn onClick={() => openSame('/#/duckmode')}>
                            <FaArrowRight />
                        </IconBtn>
                    </ButtonsDiv>
                </SloganContainer>
                <ImageApp>
                    <img src={DuckModeIcon} alt="DuckMode App Icon" />
                </ImageApp>
            </ContentContainer>
        </BannerContainer>
    )
}