import React, { Children } from 'react'
import styled from 'styled-components/macro'
import GlobalStyle from './GlobalStyle';


function Layout({children}) {
  return (
    <Wrapper>
    <GlobalStyle />
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
export default Layout