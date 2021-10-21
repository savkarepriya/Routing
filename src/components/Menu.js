import React from "react";
import {NavLink} from 'react-router-dom';

const Menu =() =>{
    return(
    <>
     <NavLink exact to="/"> Home </NavLink>  |
        <NavLink exact to="/user"> User </NavLink>|
        <NavLink exact to="/info"> Info </NavLink>| 
        <NavLink exact to="/demo"> Demo </NavLink> |
        <NavLink exact to="/contact"> Contact Us</NavLink> |
        <NavLink exact to="/about"> About Us </NavLink>  |
        <NavLink exact to="/felix"> Felix </NavLink> |

    </>
    )
}


export default Menu ;
