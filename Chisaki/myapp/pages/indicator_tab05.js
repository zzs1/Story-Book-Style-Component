import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import TabInfo05 from '../comps/TabInfo05/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab05() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Substance abuse" title="Symptom Indicator"/>
            <TabInfo05 src="../../logo/05.png"/>
          <ButtonUI/>
          </div>
          </div>
    )
  }