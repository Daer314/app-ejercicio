import React, { useState } from 'react'
import  { MenuIcon, 
    NavContainer, 
    NavIconBurguer, 
    NavIconClose,
    ListWrapper,
    ListElement,
    ListItem,
    MenuWrapper,
    MenuList,
    MenuElement,
    MenuItem, 
    Name
}  from './Navbar-Styles'

function Navbar() {

    const [navIcon, setNavIcon] = useState(false);

    const handleNavIcon = () => setNavIcon(!navIcon)

  return (
        <NavContainer>
            <MenuIcon onClick={handleNavIcon}>
                <NavIconBurguer />
            </MenuIcon>
            <Name to='/'>AppName</Name>
            <ListWrapper>
                <ListElement>
                    <ListItem to='/'>Log in</ListItem>
                </ListElement>
                <ListElement>
                    <ListItem to='/'>Sign up</ListItem>
                </ListElement>
            </ListWrapper>
            <MenuWrapper navIcon={navIcon}>
                <MenuList>
                    <NavIconClose onClick={handleNavIcon} />
                    <MenuElement>
                        <MenuItem to='/' onClick={handleNavIcon} >Rutinas</MenuItem>
                    </MenuElement>
                    <MenuElement>
                        <MenuItem to='/' onClick={handleNavIcon}>Plan alimentacion</MenuItem>
                    </MenuElement>
                    <MenuElement>
                        <MenuItem to='/' onClick={handleNavIcon}>Ejercicios</MenuItem>
                    </MenuElement>
                    <MenuElement>
                        <MenuItem to='/' onClick={handleNavIcon}>Sobre nosotros</MenuItem>
                    </MenuElement>
                    <MenuElement>
                        <MenuItem to='/' onClick={handleNavIcon}>Ayuda</MenuItem>
                    </MenuElement>
                </MenuList>
            </MenuWrapper>
        </NavContainer>    
  )
}

export default Navbar