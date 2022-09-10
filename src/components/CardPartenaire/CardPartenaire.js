import React from 'react'
// import '../CardPartenaire/CardPartenaire.css'
import Logo from '../assets/images/LogoB.png'


export default function CardPartenaire(props) {
  return (
    <div>
      <div className="card mb-3 bg-primary  border-warning">
        <h5 className="card-header">Nom:</h5>
        <div className="card-body text-center">
          <h6 className="card-title">Identifiant: </h6>
          <h6 className="card-subtitle text-muted">Slogan: </h6>
        </div>
        <img src={Logo} alt="logo" className="img-thumbnail h-25" />
        <div className="card-body">
          <p className="card-title">ACTIF </p>
        </div>
        <div className="card-body">
          <p className="card-text"> Email: </p>
          <p className="card-text"> Adresse: </p>
          <p className="card-text"> Description: </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Web adresse:</li>
          <li className="list-group-item">DPO:</li>
          <li className="list-group-item">Technicien:</li>
          <li className="list-group-item">Commercial:</li>
        </ul>
      </div>
    </div>
  )
}

