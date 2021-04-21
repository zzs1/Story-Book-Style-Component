import HomeUI from '../comps/Home'
import styles from '../styles/Home.module.css'
import  ButtonUI from '../comps/Button/index2.js'

export default function Home() {
    return (
      <div className={styles.container}>
          <HomeUI/>
          <ButtonUI 
        title="Start"
        subtext=""
        routeTo='/intro'/>
       
      </div>
    )
  }
