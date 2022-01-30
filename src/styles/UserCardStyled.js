import styled from "styled-components"

export const FullBody = styled.body`
font-family: 'Poppins', sans-serif;

display:flex;

`;

export const Card = styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
padding: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 800px;
`;

export const CardTextBody = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

`;

export const CardImg = styled.img`
height: 170px;
border-radius: 50%;
margin-bottom:10px;
`;

export const CardTitle = styled.h3`
font-size: 40px;
    font-weight: 400;
`;

export const CardText = styled.p`
  font-size: 20px;
`;

export const CardLink = styled.a`
  text-decoration: none ;
  color: black;
`;

export const CardTextBodyLink = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

`;


