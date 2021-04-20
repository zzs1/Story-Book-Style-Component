import styles from '../../styles/Home.module.css'
const position = () => ({
    left: 101,
    top: 163,
  })
  
function PictureUI() {
return(
    <div className={position()}>
        <img src="../public/illustration.png" style={styles.picture}/>
    </div>
)
}



export default PictureUI;