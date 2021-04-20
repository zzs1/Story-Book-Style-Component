import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const headingBox = styled.div`
color:#52A1C3;
font-family: 'Roboto, sans-serif';
text-align:left;
padding:10px,
`;
  
const Headstyle = styled.h1`
line-height: 0.5;
margin-bottom:20px;
`;

const subHeadStyle = styled.h3`
line-height:0.5;
margin-bottom:20px;
`;

const Intro_headingUI = ({
title="NEXT",
subtext="Question2",
routeTo='/question1'
}) => {
  const router = useRouter();
  return <headingBox onClick={()=>router.push(routeTo)}>
    <Heading>{title}</Heading>
<Ps>{subtext}</Ps>
  </headingBox>
}


export default ButtonUI;