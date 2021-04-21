import styles from '../../styles/Home.module.css'
import styled from 'styled-components'


const Image = styled.div`
left:101px;
top:163px;
display: flex;
justify-content: center;
height: 350px;
width: 120px;
z-index: -1;`;

const PictureUI = ({
src = "../public/illustration.png"
    }) => {
   return <Image>
        <PictureUI src={src}></PictureUI>
   </Image>

    }




export default PictureUI;