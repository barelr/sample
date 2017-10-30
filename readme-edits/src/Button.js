import React, { Component } from 'react';



class Button extends React.Component {
  constructor(props){
    super(props);
    
  }  
  render() {
    return(
      <button onClick={this.handleClick}>Show {this.props.section}</button>
      );
  }
}
export default Button;