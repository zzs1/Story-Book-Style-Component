import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background-color:#82DED9;
width:100px;
height:50px;
border-radius:10px;
display:flex;
flex-direction:column;
text-align:center;
color:#FFFFFF;
font-family:Roboto, sans-serif;
margin-bottom:20px
marginLeft:${props=>props.marginTop};
justify-content:center;
`;
  
const Heading = styled.h5`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
`;

const Ps = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
`;

const ButtonUI = ({
marginLeft="250px",
title="NEXT",
subtext="Question2",
routeTo='/question1'
}) => {
  const router = useRouter();
  return <CardCont marginLeft={marginLeft} onClick={()=>router.push(routeTo)}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;