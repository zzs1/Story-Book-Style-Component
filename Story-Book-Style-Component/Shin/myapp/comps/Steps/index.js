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
    fontFamily: "Saira Semi Condensed', sans-serif",
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#52A1C3',
})
const para = () => ({
    fontFamily: "Saira Semi Condensed', sans-serif",
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#52A1C3',
})
function StepsUI() {
    return (
      <div styles={container()}>
        <img src="../../public/Step01.png" style={img()}/>
        <h2 styles={head()}></h2>
        <p styles={para()}></p>
      </div>
    )
  }
  
export default StepsUI;