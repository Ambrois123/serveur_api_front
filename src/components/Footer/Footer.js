import React from 'react'
import styled from 'styled-components/macro'

export default function Footer() {
  return (
    <Wrapper>
        <Para> Created by Ambroise A. <span>&copy; 2022</span> </Para>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
height: 0.7rem;
display: flex;
justify-content: center;
align-items: center;
color: #FF6201;
border-top: 1px solid #007F5F;
bottom: 0;
`;

const Para =styled.p`
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
`;
