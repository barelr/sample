import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { entities } from './data';

class TestComponent extends Component {
  
   constructor (props) {
     super(props)
     this.state = { repos: [] }
   }
 
   getItemsAsync(searchValue, cb) {
    let data = entities().all;
      return data;
  
  }

  render () {
    return (
      <div>
        <Search items={this.state.repos}
                multiple={true}
                getItemsAsync={this.getItemsAsync.bind(this)}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}
export default TestComponent;
/* ReactDOM.render( <TestComponent />, document.getElementById('root')) */


/* class InputField extends React.Component{
    
    
      constructor(props){
       super(props);
       //this.state={inputfield: "no value"};   
       this.handleClick = this.handleClick.bind(this);
       this.updateInputValue = this.updateInputValue.bind(this);
      }
    
      handleClick(){
      
    
      }
    
      updateInputValue(evt){
        //console.log("input field updated with "+evt.target.value);
        this.state={inputString: evt.target.value}; 
       // result.value= {evt.target.value}; 
    
      }
    
      render(evt){
        var r; 
        r=<div><input type="text" id="addpixinputfield" 
                onChange={this.updateInputValue} />
          <input type="button" value="search" id="addpix" onClick={this.handleClick}/>
          <input type="text" id="result" ></input>
          </div>;    
        return r;
       }
    }

    export default InputField;
     */