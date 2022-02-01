import styled from "styled-components"

export const FullBody = styled.body`
font-family: 'Poppins', sans-serif;

display:flex;

`;

export const Card = styled.div`
background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
padding: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 1200px;
`;

export const CardTextBody = styled.div`
color:  ${({ theme }) => (theme === "light" ? "black" : "white")};
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
  color:  ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const CardText = styled.p`
  font-size: 20px;
  color:  ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const CardLink = styled.a`
  text-decoration: none ;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const CardTextBodyLink = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;

`;


