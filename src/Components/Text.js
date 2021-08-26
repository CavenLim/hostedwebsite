import React from 'react'
import styled from 'styled-components'

const StyleText = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height: 1.3em;
@media only screen and (max-width:760px){
    font-size: 1.4rem;
}
`;


export default function PText({children}) {
    return (
        <StyleText className="para">
            <p>{children}</p>
        </StyleText>
    )
}
