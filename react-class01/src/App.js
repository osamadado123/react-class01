import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import horneddata from './component/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      horneddata:horneddata,
      displayHorned:false
    }
  }

  handleClose =()=>{
    this.setState({
      displayHorned:false
    })
  }

  render() {

    return (
      <div>
            <Header/>
          <Main
          horneddata={this.state.horneddata}
          displayCardAsModel={this.displayCardAsModel}
          />

          <Footer/>
      </div>
    )

  }
}

export default App;