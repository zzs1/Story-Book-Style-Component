import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background:${props=>props.bgcolor};
min-width:100px;
height:50px;
border-radius:10px;
display:flex;
flex-direction:column;
text-align:center;
color:${props=}
font-family:Roboto, sans-serif;
margin:30px;
justify-content:center;
align-items:center;
`;
  
const Heading = styled.h5`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
width:90%;
`;

const Ps = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const ButtonUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1',
bgcolor="#82DED9",

}) => {
  const router = useRouter();
  return <CardCont 
  onClick={()=>router.push(routeTo)} 
  bgcolor={bgcolor}
  className={styles.hoverbtn2}
  >
    <Heading
     className={styles.hoverbtn2}
     >{title}</Heading>
<Ps
 className={styles.hoverbtn2}
>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;