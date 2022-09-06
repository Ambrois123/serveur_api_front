import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'


function Header() {
    const location = useLocation();

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <Link to='/' className="nav-item">
            <MenuEl isCurrentPage={location.pathname === "/Partenaires"} >Partenaires</MenuEl>
        </Link>
        <Link to='/Salles' className="nav-item">
            <MenuEl isCurrentPage={location.pathname === "/Salles"} >Salles</MenuEl>
        </Link>
        <Link to='/Formulaire' className="nav-item">
            <MenuEl isCurrentPage={location.pathname === "/Formulaire"} >Formulaire de contact</MenuEl>
        </Link>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

const MenuEl = styled.p`
font-size: 18px;
display: inline;
text-decoration: none;
border-bottom: none;
padding-bottom: 2px;
margin-left: 28px;
color: beige;
`;

export default Header