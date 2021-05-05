import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
width:377px;
height:476px;
position:absolute;
bottom:0px;
color:#FFFFFF;
`;


const Menu= ({
  routeTo="/",
  visibility="visible"
  })=>{
    const router = useRouter();
    return<Cont>
  <HomeIcon 
  src="/image/home.png"
  onClick={()=>router.push(routeTo)} 
  visibility={visibility}
  />
  <Logo 
  src="/apps_pic/app_logo.png"
  visibility={visibility}
  />
  <Menu 
  src="/icons/menu.png"
  
  />
    </Cont>
  }
     
    export default Menu;