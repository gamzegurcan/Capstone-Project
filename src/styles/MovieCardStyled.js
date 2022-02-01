import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
  color: ${({ theme }) => (theme === "light" ? "red": "red"  )};
  padding: 1rem;
  border-radius: 5%;
  width: 90%;
  height: 90%;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => (theme === "light" ? "white": "red"  )};
`;

export const CardText = styled.p`
   color: ${({ theme }) => (theme === "light" ? "#14213D": "#FCA311"  )};
`;
// export const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// export const Card = styled.div`
//   background: white;
//   width: 220px;
//   margin: 10px;
//   border-radius: 15px 15px 0 0;

//   &:hover {
//     background-color: rgb(62,62,62);
//     color:white;
//     cursor: pointer;
//     transform: scale(1.03);
//     transition: all 1s ease;
//     font-weight: 60px;
//   }
// `;

// export const CardImage = styled.div`
//   height: 150px;
//   margin-bottom: 15px;
//   background-size: cover;
// `;

