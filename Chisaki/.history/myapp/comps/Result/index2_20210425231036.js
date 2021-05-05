import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
display:flex;
justify-content:space-between;
`;
  
const Title = styled.h3`
font-family:Roboto, sans-serif;
font-weight:bold;
font-size:30px;
line-height:47px;
color:#52A1C3;

`;
const Sub = styled.p`
font-family:Roboto, sans-serif;
color:#52A1C3;
text-align:center;
font-weight:regular;
line-height:30px;
`;

const Img = styled.

const ButtonUI = ({
title="1",
routeTo='/question1',
bgcolor='#C4C4C4',


}) => {
  const router = useRouter();
  return <Container onClick={()=>router.push(routeTo)}>
    <Dot bgcolor={bgcolor}><Number>{title}</Number></Dot>

  </Container>
}


export default ButtonUI;