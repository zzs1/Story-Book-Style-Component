import HelpBoxUI from '../comps/HelpBox/index2.js'
import TopBar from '../comps/TopBar/index2'
import styles from '../styles/Home.module.css'
import PsNoteUI from '../comps/PsNote'
import ButtonUI from '../comps/Button/index2'
import ResultUI from '../comps/Result/index2'

export default function Terms() {
    return (
      <div className={styles.base}>
          <TopBar />
          <ResultUI 
          src="/apps_pic/suggestion.png"
          width="130px"
          height="130px"
          h3="Reach For Help"
          content=""
          display="none"
          />
        <HelpBoxUI 
        number="1"
        title="Call a helpline"
        content={<div>All the helplines listed below have trained professionals:<br/>
        <div className={styles.helpphone}>
        +Kids Helpline 1800 55 1800 (24 / 7)<br/>
        +Lifeline 13 11 14<br/>
        +eheadspace 1800 650 890</div></div>}
        />
        <HelpBoxUI 
        number="2"
        title="Head to Headspace"
        content="Headspace centres offer a drop-in service. Call them beforehand to check.
        You can also schedule an appointment by calling or emailing them. "/>
        <HelpBoxUI 
        number="3"
        title="Connect with ReachOut legends"
        content={<div>Regardless of where you are on your journey, you can always find additional support, advice or just some willing listeners on the ReachOut forums.</div>}
        />
        <br></br>
        <div className={styles.buttonBox}>
        <ButtonUI 
        title="BACK TO RESULT"
        subtext=""
        routeTo='/result'
        bgcolor="#52A1C3"
        />
        <ButtonUI 
        title="Learn About Different Mental Illnesses"
        subtext=""
        routeTo='/learn_more'
        bgcolor="#52A1C3"
        />
      </div>
      </div>
      
    )
  }
