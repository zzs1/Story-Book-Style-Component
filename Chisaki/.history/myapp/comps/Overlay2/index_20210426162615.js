import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:160px;
left:180px;
width:175px;
height:65px;
text-align:center;
justify-content:center;
align-items:center;
border-radius:10px;
border:3px solid #EF9595;
visibility:${props=>props.visivility};

`;

const Text = styled.p`
width:70%;
position:relative;
text-align:left;
color:#52A1C3;
margin:5px 20px;
font-size:12px;
`;

const Overlay2 = ({
visivility="hidden",
content="abc",
onClick=()=>{}  
})=> {
    return<Cont onClick={onClick} visivility={visivility} >
    <Text>{content}</Text>
    </Cont>
      
  }
  

export default Overlay2;