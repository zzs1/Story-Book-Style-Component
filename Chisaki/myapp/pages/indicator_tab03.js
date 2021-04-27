import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import TabInfo03 from '../comps/TabInfo03/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab03() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Feeling depresseed or unhappy" title="Symptom Indicator"/>
            <TabInfo03 src="../../logo/03.png"/>
          <ButtonUI/>
          </div>
          </div>
    )
  }