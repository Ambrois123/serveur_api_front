import styled from 'styled-components/macro'
import GlobalStyle from './GlobalStyle';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Layout({children}) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
        <Main>{children}</Main>
        <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
`;
const Main = styled.div`
min-height: calc(100vh - 160px);
margin: 0;
padding: 0;
${'' /* max-width: 1240px; */}
display: flex;
`;
export default Layout