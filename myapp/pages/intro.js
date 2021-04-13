import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import Heading from '../comps/Heading'

export default function Intro() {
    return (
      
      <div className={styles.container}>
          <TopBar></TopBar>
        <HeadingUI></HeadingUI>
      </div>
    )
  }
  