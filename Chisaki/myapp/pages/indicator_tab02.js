import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import TabInfo02 from '../comps/TabInfo02/index'
import styles from '../styles/Home.module.css'



export default function Indicator_tab02() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Feeling guilty or worthless" title="Symptom Indicator"/>
            <TabInfo02 src="../../logo/02.png"/>
          <ButtonUI/>
          </div>
          </div>
    )
  }