import styles from '../../styles/Home.module.css'

const container = () => ({
  width:200,
  height:30,
  alignItems:"center",
  margin:10,
  display:"flex",
  flexDirection:"row",

})

const dots = () => ({
  margin:0,
  justifyContent:"center",
  marginBottom:5,
  marginTop:5,
  width:20,
  height:20,
  margin:5,
  borderRadius:10,
  backgroundColor:"#C4C4C4",
  color:"#FFFFFF",
  fontFamily: 'Roboto, sans-serif',
  textAlign:"center",
  fontSize:12,
})

function DotsUI() {
  text={1}
  return (
    <div style={container()}>
      <div style={dots()}>{text}</div>
      
    </div>
  )
}
export default DotsUI;