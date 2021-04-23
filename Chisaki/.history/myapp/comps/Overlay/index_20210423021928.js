import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:240px;
left:70px;
width:250px;
height:150px;
text-align:center;
justify-content:center;
align-items:center;
background-color:#C4C4C4;
border-radius:10px;
opacity:0.8;
visibility:${props=>props.visivility};

`;

const Text = styled.p`
width:70%;
position:relative;
text-align:center;
color:#52A1C3;
margin-top:10px;


`;

const Overlay = ({
visivility="hidden",
content="abc",
onClick=()=>{}  
})=> {
    return<Cont onClick={onClick} visivility={visivility} >
    <Text>{content}</Text>
    </Cont>
      
  }
  

export default Overlay;