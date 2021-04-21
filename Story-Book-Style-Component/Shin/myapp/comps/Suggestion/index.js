import styles from '../../styles/Home.module.css'

const imagery = () => ({
    width: "335px",
    height: "444px",
    padding: "1px",
    border: "1px",
    borderColor:"#52A1C3"
  })

  function SuggestionUI() {
    return(
        <div className={imagery()}>
            <img src="../public/suggestion.png" style={styles.picture}/>
        </div>
    )
    }
    
    export default SuggestionUI;