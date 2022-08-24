import React from 'react';
class Hornedbeast extends React.Component {
render (){
    return (
<div className="main">
   <h2>{this.props.title}</h2>
   <p>{this.props.description}</p>
   <img src={this.props.imgUrl} alt={this.props.alt} title={this.props.title}/>
</div>
    )
}  
}
export default Hornedbeast;