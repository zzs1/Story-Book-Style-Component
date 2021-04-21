import styles from '../../styles/Home.module.css'
import styled from 'styled-components'

const Headline = styled.h2`
display: flex;
position: relative;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 47px;
color: #52A1C3;
`;
const Subhead = styled.h3`
display: flex;
position: relative;
font-family: Saira SemiCondensed, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;
color: #52A1C3;
`;
const Container = styled.div`
display: flex;
position: relative;
flex-wrap: nowrap`;


const Image = styled.img`
display: flex;
position: relative;
width: 66px;
height: 75px;`;

const HeadlineUI = ({
    title = "Symptom Diagnosis",
    subtitle = "Effect occured on different body parts",
    src = "/Icon.png"
        }) => {
        return <Container>
        <Headline>{title}</Headline>
        <Subhead>{subtitle}</Subhead>
        <Image src={src}/>
        </Container>
        }
        
        export default HeadlineUI;