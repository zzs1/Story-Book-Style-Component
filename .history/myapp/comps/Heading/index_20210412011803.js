import styles from '../../styles/Home.module.css'


const container = () => ({
  width:200,
  height:30,
  alignItems:"center",
  margin:10,
  textAlign:"center",

})

const text = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  color:"#52A1C3",
  font-family: 'Saira Semi Condensed', sans-serif;,
  textAlign:"center",
 


})


// number need to find the way to change the text {number}
function HeadingUI() {
  return (
    <div style={container()}>
   <h3 text>Top 3 Mental Illness</h3>
    </div>
  )
}


export default HeadingUI;