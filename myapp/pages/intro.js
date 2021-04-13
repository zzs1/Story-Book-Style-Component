import HeadingUI from '../comps/Heading'
import TopBar from '../comps/TopBar'
import styles from '../styles/Home.module.css'
import Heading from '../comps/Heading'
import ContentUI from '../comps/Content'

export default function Intro() {
    return (
      <div className={styles.container}>
          <TopBar />
        <HeadingUI />
        <ContentUI />
        <ContentUI />
        <ContentUI />
      </div>
    )
  }
  