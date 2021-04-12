const container = () => ({
    width: "345px",
    height: "429px",
    top: "150px",
    border: "1px, solid, #82DED9;"
  })

const img = () => ({
    margin:0,
    width:"191px",
    height:"126px",

})
const head = () => ({
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '800',
    fontSize: '16px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#52A1C3',
})
const para = () => ({
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#52A1C3',
})
function SelectionUI() {
    return (
      <div style={container()}>
        <img src="../../Steps/Step01.png" style={img()}/>
        <h3 style={head()}></h3>
        <p style={para()}></p>
      </div>
    )
  }
  
export default SelectionUI;