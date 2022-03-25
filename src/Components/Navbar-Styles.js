import styled from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'

//----------------- Navbar -----------------//

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #220901;
    padding: 5px 25px;
    z-index: 1;
`

export const MenuIcon = styled.div`
    background-color: transparent;
`

export const NavIconBurguer = styled(FaBars)`
    cursor: pointer;
    color: #F6AA1C;
    font-size: 25px;
    background-color: transparent;

    @media screen and (max-width: 960px){
        font-size: 20px;
    }
`

export const NavIconClose = styled(FaTimes)`
    cursor: pointer;
    color: #F6AA1C;
    font-size: 25px;
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
`

export const ListWrapper = styled.ul`
    display: flex;
    margin-left: auto;
    list-style: none;
    background-color: transparent;
`

export const ListElement = styled.li`
    padding: 0 8px;
    background-color: transparent;
`

export const ListItem = styled(Link)`
    color: #F6AA1C;
    text-decoration: none;
    font-size: 1.2rem;
    background-color: transparent;

    @media screen and (max-width: 960px){
        font-size: 1rem;
    }
`

export const Name = styled(Link)`
    color: #F6AA1C;
    text-decoration: none;
    font-size: 1.2rem;
    margin-left: 25px;

    @media screen and (max-width: 960px) {
        font-size: 1rem;
        margin-left: 15px;
    }
`

//----------------- Burguer Menu -------------------//

export const MenuWrapper = styled.div`
    background-color: #220901;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: ${ props => props.navIcon ? '0' : '-100%'};
`

export const MenuList = styled.ul`
        align-items: center;
`

export const MenuElement = styled.li`
    list-style: none;
    padding: 6px;
`

export const MenuItem = styled(Link)`
    text-decoration: none;
    color: #F6AA1C;
`