import styled  from  'styled-components'; 

const HomeCont = styled.div`
.body{
    background-Color: #52A1C3;
}
.circle{
    background: lightblue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
`;
function HomeUI() {
    return <HomeCont>
       <div className="body">
        <img src="/image/logo_bg.png" 
        style={{
          width:250,
          height:90,
          marginLeft:"45%",
        }}/>
      </div>
      <div className ="circle"></div>
      </HomeCont>
    
  }
  export default HomeUI;