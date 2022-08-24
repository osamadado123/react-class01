import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeast extends React.Component {

    render(){
      return(
        <div>
<h2>{this.props.title}</h2>
<p>{this.props.disc}</p>
<img src={this.props.img} alt={this.props.alt} title={this.props.title}></img>
<style jsx>
  {`
img{
  width=600px;
  height=300px;
}
  `}
  </style>
</div>
      )
    }

  }
  
export default HornedBeast;