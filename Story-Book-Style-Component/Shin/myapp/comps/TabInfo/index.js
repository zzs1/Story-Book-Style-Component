import React from 'react'
import styled from 'styled-components';

const Tabs = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  padding:150px 28px 110px 28px;
  border-radius:20px;
  width: 322px;
  height: 411px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
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
`;
const Detail = styled.p`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 25px;
text-align: center;
justify-content:center;
color: #52A1C3;
display:inline-flex;
`;

const Line = styled.h3`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
color: #52A1C3;
text-align: center;
display:inline-flex;
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

const Last = styled.p`
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-align: center;
color: #52A1C3;
`;

const Spa = styled.span`
color: red;
`;
const TabInfo = ({
    bgcolor="rgba(205, 240, 238, 1)",
    src="",
    title="",
    text="",
    text2="",
    text3=""
  }) =>{
    return <Tabs bg={bgcolor}><Headstick src={src}/><h3 title={title}/><Detail>{text}<Spa>{text2}</Spa></Detail>
    <br/>
    <br/>
    <Line>Seeks out for Professionals!</Line>
    <br/>
    <Verb><a  href="https://www.mentalfreedom.ca/">Visit https://www.mentalfreedom.ca/</a></Verb>
    <br/>
    <Last>{text3}</Last>
    </Tabs>

}

export default TabInfo