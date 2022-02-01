import styled from "styled-components";
import {Link} from "react-router-dom";

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: red;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background: black;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: red;
  }
`;

export const ThemeButton = styled.button`
  display:flex;
  border: 0;
  color: white;
  background-color:black;
  padding: 0;
`;

export const UserIcon = styled.img`
  padding: 6px;
  width: 10%;
  margin-left: 0;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;