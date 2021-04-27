import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import TabInfo04 from '../comps/TabInfo04/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab04() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Quiet or withdrawn" title="Symptom Indicator"/>
            <TabInfo04 src="../../logo/04.png"/>
          <ButtonUI/>
          </div>
          </div>
    )
  }