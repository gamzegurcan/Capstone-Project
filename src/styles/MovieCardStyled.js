import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  color: ${({ theme }) => (theme === "light" ? "#AF0404": "#AF0404"  )};
  padding: 1rem;
  border-radius: 5%;
  width: 95%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 1s ease;
  }
`;

export const CardTitle = styled.h4`
  color: white;
`;

export const CardText = styled.p`
   color: white;
`;


