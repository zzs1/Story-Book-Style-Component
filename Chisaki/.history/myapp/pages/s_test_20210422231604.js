import styles from '../styles/Home.module.css'
import Button from '../comps/Button/index2'
import TopBar from '../comps/TopBar/index2'
import J_Head from '../comps/J_Head'
import EnlargedUI from '../comps/Enlarged'





export default function Suggest() {
  return (
    <div>
     <TopBar 
     title="Suggestion"
     subtitle=""/>
     <J_Head
    title="How it works"
    subhead="Take our suggestion"
    />
    <div className={styles.containerbox}>
    <EnlargedUI 
    src="apps_pic/test.jpg" 
    title="Take the test" 
    subtext="Complete the 6 questions test"
    routeTo="/instruction"
    Pstyle= "There are totall 6 questions in the app to scale your mental illness level. Based on your answers, the app will show you the percentage of the possibility of serverving mental illnesses, specifically "
    visivility="hidden"
    />
    </div>
    <div className={styles.buttonBox}>
    <Button 
    title="See Sugestion"
    subtext=""
    routeTo="/instruction"/>
    </div>
    </div>
  )
}
