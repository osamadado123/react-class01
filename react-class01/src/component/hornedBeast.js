import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numlikes: 0
    };
  }

  incrementNumberOFlikes = () => {
    this.setState({
      numlikes: this.state.numlikes + 1
    });
  }

  render() {
    return (
      <div className='card'>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={this.incrementNumberOFlikes} alt={this.props.alt} src={this.props.url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>   {this.props.description}   </Card.Text>
            <Card.Text>   Number of likes 😸 {this.state.numlikes}  </Card.Text>

            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>









      </div>
    );
  }
}


export default HornedBeast;