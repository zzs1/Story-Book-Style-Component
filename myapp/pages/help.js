import HelpBoxUI from '../comps/HelpBox'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import PsNoteUI from '../comps/PsNote'

export default function Terms() {
    return (
      <div className={styles.container}>
          <TopBar />
        <HelpBoxUI />
        <PsNoteUI />
      </div>
    )
  }
