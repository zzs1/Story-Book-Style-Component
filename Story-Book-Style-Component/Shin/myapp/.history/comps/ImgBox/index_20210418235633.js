import styles from '../../styles/Home.module.css'


const container = () => ({
  width:375,
  height:30,
  
  

})

const img = () => ({
  margin:0,
  width:"100px",
  height:"80px",
 
 


})


// number need to find the way to change the text {number}
function ImgBoxUI() {
  return (
    <div style={container()}>
      <img src="/" style={img()}/>
    </div>
  )
}


export default ImgBoxUI;