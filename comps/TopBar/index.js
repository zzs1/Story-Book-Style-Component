import styles from '../../styles/Home.module.css'



function TopBar() {
    return (
      < div className={styles.topBar}>
        <img src="/image/backicon.png" 
        style={{
          width:35,
          height:35,
          textAlign:"left",
          marginLeft:5,
          
        }}/>
        <img src="/image/logo_bg.png"
        style={{
          width:200,
          height:50,
          marginLeft:40,
        }}/>
      </div>
    )
  }
  export default TopBar;