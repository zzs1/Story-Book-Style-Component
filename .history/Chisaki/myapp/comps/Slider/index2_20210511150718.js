import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
display:flex;
flex-direction:column;
width:90%;
margin-left:20px;
`;
  
const Slider = styled.input`
display:flex;
min:10;
max:100;
value:${props=>props.value};
-webkit-appearance: none;
max-width: 400px;
height: 25px;
background: #d3d3d3;
border-radius:20px;
opacity: 0.7;

`;
const Slider_design =styled.span`
display: block;
margin-top: 2.5em;
font-size: 12px;
color: #a59eb5;
`;

const PsCont =styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`;


const Ps1 = styled.p`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:13px;
color:#78CDC8;
font-family:"Saira Semi Condensed', sans-serif";
`;

const Highlight = styled.strong`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:15px;
font-weight:bold;
color:#78CDC8;
font-family:"Saira Semi Condensed', sans-serif";
`;

const Ps2 = styled.p`
margin:0px;
width:80%;
justify-content:center;
font-size:12px;
color:#52A1C3;
margin-left:40px
`;
const SliderUI = ({
your_level="Anxiety disorder",
level="Mild",
value="",
}) => {
 
  return <Cont>
    <PsCont>
    <Ps1>Your <Highlight>{your_level} </Highlight>level: <Highlight>{level}</Highlight></Ps1>
    </PsCont>
    <div>
    <Slider type="range" min="10" max="100" value={value} className={styles.slider} /><br></br>
    <Slider_design />
    </div>
  <PsCont>
    <Ps2>Mild</Ps2>
    <Ps2>Moderate</Ps2>
    <Ps2>Severe</Ps2>
  </PsCont>
  </Cont>
}


export default SliderUI;