import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index2'
import SuggestionInfo from '../comps/SuggestionInfo'
import styles from '../styles/Home.module.css'



export default function Suggestion_08() {
    return (
          <div className={styles.base}>
          <TopBar/>
            <Tabhead 
            Sub="Adopt positive attitude" 
            title="Suggestion"/>
            <SuggestionInfo
            src="../../suggestions/08.png"
            title="Learn to adopt a positive attitude"
            content={<div><p>Focusing on the positive things in your life can make your life better and may even improve your health. Try to accept changes when they occur, and keep problems in perspective. Stress management techniques, including relaxation methods, may help you.</p></div>}
            />
           <div className={styles.buttonBox}> 
          <ButtonUI
          title="BACK"
          subtext= ""
          routeTo="/suggestions"
          bgcolor="#52A1C3"
          />
          </div>
          </div>
    )
  }