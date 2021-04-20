import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const Container = styled.div`
width:375px;
height:30px;
`;
  
const Img = styled.img`
margin:0px;
width:100px;
height:80px;
`;


const ImgBoxUI = ({
title="Heading",
subtext="subtitle",
}) => {
 
  return <Container>
    <HeadStyle>{title}</HeadStyle>
<SubStyle>{subtext}</SubStyle>
  </HeadingBox>
}


export default ImgBoxUI;