import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
width:377px;
height:200px;
display:flex;
flex-direction:column;
`;
  
const SliderBox = styled.div`
display:"flex",
flexGrow:1,
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
  return <CardCont onClick={()=>router.push(routeTo)} bgcolor={bgcolor}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </CardCont>
}


export default ButtonUI;