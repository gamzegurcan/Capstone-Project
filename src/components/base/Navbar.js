import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router';
// import logo from '../../assets/images/logo';

import {Nav, MenuLink, Menu} from '../../styles/NavbarStyled';

function Navbar(props){
  const [display, setDisplay] = useState(true)
  return(
    <>
      <Nav>
        <Menu>
          <MenuLink href='/'>Home</MenuLink>
          <MenuLink href='/about'>About</MenuLink>
          <MenuLink dropdownToggle onClick={() => setDisplay(!display)}>Movies</MenuLink>
          <MenuLink href='/popular' hidden={display} toggle={() => setDisplay(!display)} >Popular</MenuLink>
          <MenuLink href='/top-rated' hidden={display} toggle={() => setDisplay(!display)}>Top Rated</MenuLink>
        </Menu>
      </Nav>
    </>
  );
}

export default Navbar;