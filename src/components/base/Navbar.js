import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FiToggleLeft, FiToggleRight} from 'react-icons/fi';
import {Nav, MenuLink, Menu, StyledLink, ThemeButton,UserIcon, Profile} from '../../styles/NavbarStyled';
import {themeChanger} from '../../reduxStore/theme';
import { userLogout } from '../../reduxStore/user';


function Navbar(props){
  const [display, setDisplay] = useState(true)
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();
  const {themeChange, user } = useSelector((state) => state);
  const themeName = themeChange ? "light" : "dark";
  console.log(themeName)
 console.log(theme)
  function clickHandler(event) {
    
    setTheme(!theme);
    dispatch(themeChanger(theme));
  } 

  return(
    <>
      <Nav>
        <Menu>
          <MenuLink href='/'>Home</MenuLink>
          <MenuLink href='/about'>About</MenuLink>
          <MenuLink dropdownToggle onClick={() => setDisplay(!display)}>Movies</MenuLink>
          <MenuLink href='/popular' hidden={display} toggle={() => setDisplay(!display)} >Popular</MenuLink>
          <MenuLink href='/top-rated' hidden={display} toggle={() => setDisplay(!display)}>Top Rated</MenuLink>
          <StyledLink to='/profile'>Profile</StyledLink>
        </Menu>
        <Profile>
          
          {user?.login && <UserIcon src={`${user.avatarUrl}`} />}
          {
            user?.login 
            ? <StyledLink to='/' onClick={() => dispatch(userLogout(false))} >Logout</StyledLink>
            : <StyledLink to='/login'>Login</StyledLink>
          }
          <ThemeButton
            id="themebutton"
            variant="outline"
            onClick={clickHandler}
            theme={themeName}
          >
            {theme ? <FiToggleRight  size='30px' /> : <FiToggleLeft size='30px' />}
          </ThemeButton>
        </Profile>
      
      </Nav>
    </>
  );
}

export default Navbar;