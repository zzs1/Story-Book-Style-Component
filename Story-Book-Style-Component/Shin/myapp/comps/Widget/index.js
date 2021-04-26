import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';

const CardCont1 = styled.div`
  background-color:${props=>props.Bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont2 = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont3 = styled.div`
  background-color:${props=>props.Bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont4 = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont5 = styled.div`
  background-color:${props=>props.Bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont6 = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;
const CardCont7 = styled.div`
  background-color:${props=>props.Bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;

const CardCont8 = styled.div`
  background-color:${props=>props.bg};
  background-size: 100% 100%;
  padding:5px;
  border-radius:20px;
  height:155px;
  width:155px;
  justify-content:center;
  flex-direction:row;
  margin-bottom:14px;
  margin-left:26px;
  display:inline-flex;
  &>*{
    color:#FFF;
  }
`;


const CardDiv = styled.div`
margin-bottom:20px;
min-width:414px;
min-height:634px;
display:flex;
justify-content:center;
align-items:center;

`;

const WidgetDiv = styled.div`
width:414px;
height:634px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
flex-wrap:wrap;
`;
const WidgetImg = styled.img`
width:70px;
height:70px;
`;

const WidgetH = styled.span`
display:block;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
text-align: center;
padding-top: 15px;
color:${props=>props.cr};
`;
const WidgetH2 = styled.span`
display:block;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
text-align: center;
padding-top: 15px;
color:${props=>props.cl};
`;
const Widgetcontent = styled.div`
vertical-align: top;
display: inline-block;
text-align: center;
`;


const Widget = ({
  bgcolor="rgba(205, 240, 238, 1)",
  backgroundcolor="rgba(165, 231, 228, 1)",
  src="",
  color="rgba(82, 161, 195, 1)",
  text1="",
  text2="",
  text3="",
  text4="",
  text5="",
  text6="",
  text7="",
  text8=""
}) =>{
  const router = useRouter();
  return <CardDiv>
        <WidgetDiv>
        <CardCont1 Bg={backgroundcolor} cr={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH>{text1}</WidgetH></Widgetcontent></CardCont1>
        <CardCont2 bg={bgcolor} cl={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH2>{text2}</WidgetH2></Widgetcontent></CardCont2>
        <CardCont3 Bg={backgroundcolor} cl={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH2>{text3}</WidgetH2></Widgetcontent></CardCont3>
        <CardCont4 bg={bgcolor} cr={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH>{text4}</WidgetH></Widgetcontent></CardCont4>
        <CardCont5 Bg={backgroundcolor} cr={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH>{text5}</WidgetH></Widgetcontent></CardCont5>
        <CardCont6 bg={bgcolor} cl={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH2>{text6}</WidgetH2></Widgetcontent></CardCont6>
        <CardCont7 Bg={backgroundcolor} cl={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH2>{text7}</WidgetH2></Widgetcontent></CardCont7>
        <CardCont8 bg={bgcolor} cr={color} onClick={()=>router.push("/")}><Widgetcontent><WidgetImg src={src}/><WidgetH>{text8}</WidgetH></Widgetcontent></CardCont8>
        </WidgetDiv>
  </CardDiv>
  
}


export default Widget
