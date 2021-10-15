import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles =  styled.div`

text-align: center;
p{
    font-family: -apple-system, sans-serif;
    font-size:2rem;
}
h2{
    font-family: -apple-system, sans-serif;
    font-size: 5.8rem;
    margin-top:0.5rem;
    text-transform:uppercase;
    color:var(--white);

}
@media only screen and (max-width:760px){
    p{
        font-size: 1.2rem;
    }
    h2{
        font-size: 3.8rem;
    }
}

`

export default function SectTitle({subheading = 'This is subheading',heading='This is heading'}) {
    return (
        <SectionTitleStyles className="sectTitle">
            <p>{subheading}</p>
            <h2>{heading}</h2>
            
        </SectionTitleStyles>
    )
}
