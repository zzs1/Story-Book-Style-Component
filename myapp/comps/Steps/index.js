import styles from '../../styles/Home.module.css'

const container = () => ({
    width: "345px",
    height: "429px",
    top: "150px",
    border: "1px, solid, #82DED9;"
  })

const img = () => ({
    margin:0,
    width:"107px",
    height:"62px",

})
const head = () => ({
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#52A1C3',
})
const para = () => ({
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#52A1C3',
})
function StepsUI() {
    return (
      <div style={container()}>
        <img src="../../Steps/Step01.png" style={img()}/>
        <h2 style={head()}></h2>
        <p style={para()}></p>
      </div>
    )
  }
  
export default StepsUI;