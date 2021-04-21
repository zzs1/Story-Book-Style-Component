import styles from '../../styles/Home.module.css'

const Headline = () => ({
    color: "#52A1C3",
    fontfamily: 'Roboto, sans-serif',
    textAlign:"left",
    width: "375px",
})

const Number = () => ({
    display:"inline-flex",
    flexDirection:"column",
    borderRadius: "50%",
    width: "50px",
    height: "50px", 
    backgroundColor:"#52A1C3",
    color:"#FFFFFF",
    textAlign: "center"
})

const Title =() =>  ({
    flexDirection:"column",
    fontSize:"30px"
})
const pStyle = () => ({
    margin:"5px",
    textIndent: "20px",
    fontsize: "16px",
})

function HelpBoxUI(){
    return (
        <div className={styles.title}
        style={Headline()}>
     <h1 className={styles.title} style={Number()} >1</h1>
        <h2 className={styles.title} style={Title()}> Call a helpline </h2>
          <p className={styles.title} style={pStyle()}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.  Fusce nec tellus sed augue semper porta. Mauris massa. 
            
          </p>
        </div>
      )
}  
export default HelpBoxUI;