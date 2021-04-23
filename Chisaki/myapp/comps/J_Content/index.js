import styles from '../../styles/Home.module.css'

const contentStyle = () => ({
    color: "#52A1C3",
    fontfamily: 'Roboto, sans-serif',
    textAlign:"left",
    textIndent: "20px",
    fontSize: "18px",
    width: "375px",
})

const pStyle = () => ({
    margin:"5px",
})

function J_Content(){
    return (
        <div className={styles.title}
        style={contentStyle()}>
          <p className={styles.title} style={pStyle()}>
           Retheraph is come from theraphist, our goal is to make our app be like your therphist that show the potential illness you may have.
         Mental health is always an issue across different country, people may easily ignore their mental health due to busy work life  
          Our main goal is to help people to record their mental issues , keep tracking their emotion/feeling everyday. Also, educate people to build a good mental health.
          </p>
        </div>
      )
}  
export default J_Content;