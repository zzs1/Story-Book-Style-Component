import React from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav';
import Burger from '../Burger';

const Nav = styled.nav`

Width:113px;
Height:188px;
padding: 0 20px;
display:flex;
justify-content: space-between;


`;


const NavBar = ({
}) => {

   return <Nav>
  <Burger />
   </Nav>
}

export default NavBar