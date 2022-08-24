import React from "react";
import Headers from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

class App extends React.Component{
  render(){
    return(
      <div>
      <Headers />
      <Main />
      <Footer/>
     
      </div>
    )
  }
}
export default App;