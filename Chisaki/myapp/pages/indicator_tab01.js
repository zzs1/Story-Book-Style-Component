import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import TabInfo01 from '../comps/TabInfo01/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab01() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Feeling Anxious or worried" title="Symptom Indicator"/>
            <TabInfo01 src="../../logo/01.png"/>
          <ButtonUI/>
          </div>
          </div>
    )
  }