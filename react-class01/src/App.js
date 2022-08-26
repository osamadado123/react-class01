import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import horneddata from './component/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './component/SelectedBeast';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      horneddata:horneddata,
      selectedHorned:{},
      displayHorned:false
    }
  }
  displayCardAsModel =(clickedHornedTitle) => {
    const selectedHorned = horneddata.find(element=>element.title === clickedHornedTitle)

    this.setState({
      selectedHorned:selectedHorned,
      displayHorned:true
    })

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
          <SelectedBeast
          displayHornedObject={this.state.selectedHorned}
          showSelectedHorned={this.state.displayHorned}
          handleClose={this.handleClose}
          />
          <Footer/>
      </div>
    )

  }
}

export default App;