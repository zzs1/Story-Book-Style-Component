import React from 'react'
import styled from 'styled-components';
import styles from '../../styles/Home.module.css'


const Tabs = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  padding:50px 28px 110px 28px;
  border-radius:20px;
  width: 322px;
  height: 411px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:0px;
  vertical-align: center;
  display: inline-block;
  text-align: center;
  &>*{
    color:#FFF;
  }
`;
const Headstick = styled.img`
width:50px;
height:50px;
justify-content:center;
align-content: center;
display:inline-flex;
margin-bottom: 
`;
const Detail = styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
text-align: center;
justify-content:center;
color: #52A1C3;
`;

const Line = styled.h3`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
color: #52A1C3;
text-align: center;
justify-content:center;
align-content: center;
`;

const Verb = styled.p`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-align: center;
text-decoration-line: underline;
color: #52A1C3;
`;
const A = styled.a`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-align: center;
text-decoration-line: underline;
color: #52A1C3;
`;

const Last = styled.p`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-align: center;
color: #52A1C3;
`;

const Tit = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 28px;
text-align: center;
color: #52A1C3;
justify-content:center;
align-content: center;
`;

const Spa = styled.span`
color: red;
`;
const TabInfo08 = ({
    bgcolor="#CDF0EE",
    src=""
  }) =>{
    return <Tabs bg={bgcolor}><Headstick src={src}/><Tit>Conditions and Symptoms</Tit><Detail>
    Personality change refers to 
      <span className={styles.span}>a shift in the way you think, act, or feel.  </span>
      A sudden, undesired, or uncontrollable change in your personality may be a sign of a serious condition. Personality changes may be 
      <span className={styles.span}> the result of an interplay of factors, including heredity, environment, and stress. </span></Detail>
    <Line>Seeks out for Professionals!</Line>
    <Verb><A  href="https://www.mentalfreedom.ca/">Visit https://www.mentalfreedom.ca/</A></Verb>
    <Last>For professional instruction</Last>
    </Tabs>

}

export default TabInfo08