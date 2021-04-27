import ButtonUI from '../comps/Button/index2'
import Tabhead from '../comps/Tabhead/index'
import TopBar from '../comps/TopBar/index'
import SuggestionInfo from '../comps/SuggestionInfo/index'
import styles from '../styles/Home.module.css'



export default function Suggestion_01() {
    return (
          <div className={styles.base}>
          <TopBar/>
          <div className={styles.containerbox}>
            <Tabhead Sub="Eat Well" title="Suggestion"/>
            <SuggestionInfo src="../../logo/01.png"
            text="Eating healthy is not only good for your physical health, but also for your mental health. some people release their stress by eating junk foods, taking caffeine, or drinking alcohol, but it is not a good way to release your stress in the long run."
            text2=" Consider making healthy eating and drinking habits."/>
          <ButtonUI/>
          </div>
          </div>
    )
  }