import styles from '../../styles/Home.module.css'
import styled from 'styled-components'



function OverlayUI (){
    return(
      <div className={styles.overlay}>
      {content}
      </div>
    )
  }
  

export default OverlayUI;