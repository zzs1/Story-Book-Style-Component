import styles from '../../styles/Home.module.css'



function TopBar() {
    return (
      < div className={styles.topBar}>
        <img src="../../image/backicon.png" 
        style={{
          width:50,
          height:50,
          textAlign:"left",
          
        }}/>
        <img src="../../image/logo_bg.png" 
        style={{
          width:200,
          height:50,
          marginLeft:"40px",
        }}/>
      </div>
    )
  }
  export default TopBar;