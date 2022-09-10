import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import CardPartenaire from '../CardPartenaire/CardPartenaire';


export default function Partenaire() {
  // const [posts, setPosts]

  // useEffect(() =>{

  //   const fetchData = async() =>{
  //     try{
  //         const response = await api.get('/posts');
  //     }catch(err){

  //     }
  //   }

  // },[])
  
  return (
    <div>
      <Title>Informations sur chaque Partenaire</Title>
      <Wrapper className="d-flex justify-content-center align-items-center mt-5">
        <div className="container-fluid  ">
          <div className="row g-4 pb-4 ">
            <div className="col-md">
              <CardPartenaire 
              />
            </div>
            <div className="col-md">
              <CardPartenaire />
            </div>
            <div className="col-md">
              <CardPartenaire />
            </div>
            <div className="col-md">
              <CardPartenaire />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
${'' /* display: grid;
width: 25em;
grid-gap: 6rem;
grid-template-columns: repeat((auto-fit, minmax(30rem, 1fr)));
align-items: center; */}

`;

const Title = styled.p`
font-size: 1.2rem;
text-align: center;
text-decoration: underline;

`;