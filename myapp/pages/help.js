import HelpBoxUI from '../comps/HelpBox/index2'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import PsNoteUI from '../comps/PsNote'
import  ButtonUI from '../comps/Button/index2.js'

export default function Terms() {
    return (
      <div className={styles.container}>
          <TopBar />
        <HelpBoxUI />
        <HelpBoxUI />
        <HelpBoxUI />
        <PsNoteUI />
        <ButtonUI 
        title="Start"
        subtext=""
        routeTo='/intro'/>
      </div>
    )
  }
