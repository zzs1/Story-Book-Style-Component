import styles from '../../styles/Home.module.css'



function TopBar() {
    return (
      < div className={styles.topBar}>
        <img src="https:placekitten.com/100/100" 
        style={{
          width:50,
          height:50,
          textAlign:"left",
          
        }}/>
        <img src="https:placekitten.com/50/50" 
        style={{
          width:200,
          height:50,
          marginLeft:"40px",
        }}/>
      </div>
    )
  }
  export default TopBar;