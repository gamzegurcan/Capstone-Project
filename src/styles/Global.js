import styled from "styled-components";

const GlobalStyles = styled.div`
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    background-color:${({ theme }) => (theme === "light" ? "white" : "#252525")};
    color:${({ theme }) => (theme === "light" ? "black" : "#AF0404")};
`;

export default GlobalStyles;