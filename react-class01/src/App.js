import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Data from './component/Data.json';
import SelectedBeast from './component/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      upImage: {},
      show: false
    }
  }

  handleClose = (imgCard) => {
    console.log(imgCard)
     this.setState({
      show: !this.state.show,
      
      upImage: imgCard

    }
    ) } 
    

  render() {
    return (

      <div>
        <Header />

        <Main
          Data={Data}
         handleClose={this.handleClose} />

        <Footer />

        <SelectedBeast

          show={this.state.show}
          handleClose={this.handleClose}
          upImage={this.state.upImage}

        />

      </div >
    )
  }
}
export default App;