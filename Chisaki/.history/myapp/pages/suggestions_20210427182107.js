import TopBar from '../comps/TopBar/index2'
import ButtonUI from '../comps/Button/index2'
import styles from '../styles/Home.module.css'
import Wig from '../comps/Wig/index'
import J_head from ''


export default function Indicator() {
    return (
          <div className={styles.base}>
            <TopBar/>
          <J_head 
          title="Suggestions" 
          subhead="The way to treat the mental illness issues"/>
          <Wig/><br></br>
          <ButtonUI/>
          </div>
    )
  }