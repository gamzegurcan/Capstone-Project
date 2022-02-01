import styled from "styled-components";

const GlobalStyles = styled.body`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    background-color:${({ theme }) => (theme === "light" ? "white" : "#252525")};
  }
`;

export default GlobalStyles;