import styles from '../../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';

const Cont= styled.div`
`;
const PsStyle = styled.p`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:12px;
    width:80%;
    margin-left:20px;
    `;

const PsStyle2 = styled.p`
    color:#58ABAE;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:12px;
    width:80%;
    margin-left:20px;
    `;
const Strong = styled.strong`
font-weight:bold;
margin:0;
`;

const A = styled.a`
color: #52A1C3;
`;
const A2 = styled.a`
color:#58ABAE;
`;
   // a:hoverBackgroundColor: "yellow";
      
const PsNoteUI = ({

})=>{
    return (
        <Cont>
        
          <PsStyle>
                
                Result does not represent a real medical diagnosis.</PsStyle>

          </Cont>
        
      )
}  
export default PsNoteUI;
