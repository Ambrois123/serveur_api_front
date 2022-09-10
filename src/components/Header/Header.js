import React from 'react'
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom'



export default function Header() {

  const location = useLocation();
  return (
    <Wrapper>
      <Logo>SALLE DE FITNESS</Logo>
      <nav>
        <Link to='/'>
            <MenuEl isCurrentPage={location.pathname === "/"}>Partenaires</MenuEl>
        </Link>
        <Link to='/Salles'>
          <MenuEl isCurrentPage={location.pathname === "/Salles"}>Salles</MenuEl>
        </Link>
        <Link to='/Formulaire'>
          <MenuEl isCurrentPage={location.pathname === "/Salles"}>Formulaire</MenuEl>
        </Link>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0px 24px;
align-items: center;
border-bottom: 1px solid #007F5F;

& a{
  text-decoration: none;
  color: inherit;
  margin-right: 16px;
}
@media(max-width: 400px){

}

`;

const MenuEl = styled.p`
font-size: 16px;
display: inline;
padding-bottom: 2px;
border-bottom: solid 2px #FF6201;
&:hover{
  border-bottom: solid 2px #007F5F;
}
`;

const Logo = styled.h2`
color: #FF6201;
&:hover{
  color: #007F5F;
}
@media(max-width: 600px){
  text-align: center;
  font-size: 1.2rem;
  margin-right: 15px;
}
`;