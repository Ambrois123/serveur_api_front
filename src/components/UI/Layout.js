import styled from 'styled-components/macro'
import GlobalStyle from './GlobalStyle';
import Header from '../Header/Header';


function Layout({children}) {
  return (
    <Wrapper>
    <GlobalStyle />
    <Header />
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
// const Main = styled.div`
// min-height: calc(100vh - 112px);
// `;
export default Layout