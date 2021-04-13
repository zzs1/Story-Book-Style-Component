const headingStyle = () => ({
    color: "#52A1C3",
    backgroundColor:"#region ",
    fontfamily: 'Roboto, sans-serif',
    textalign:"left",
    padding:"5px"
})


function HeadingUI(){
    return (
        <div styles={headingStyle()}>
          <h1>Heading</h1>
          <h4>Sub-heading</h4>
        </div>
      )
}  
export default HeadingUI;