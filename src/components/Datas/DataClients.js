import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardPartenaire from '../CardPartenaire/CardPartenaire'

export default function DataClients() {

  const [data, setData] = useState([])

  useEffect(() =>{
    axios.get('http://localhost/SERVEUR_SALLE_SPORT/front/clients')
    .then(res => {
      console.log(res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  },[])
  
  return (
    <div>
    {
      data.map((data, index)=>{
        return <CardPartenaire 
        id={data.clientId}
        nom={data.clientName}
        slogan={data.clientSlogan}
        email={data.clientEmail}
        adresse={data.clientAdresse}
        active={data.clientActive}
        projet={data.shortDescription}
        logo={data.clientLogo}
        url={data.clientUrl}
        dpo={data.déléguéProtection}
        technicien={data.contactTechnique}
        commercial={data.contactCommercial}

        />
        
      })
    }
    </div>
   
  )
  
}

