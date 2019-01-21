import React, { Component } from 'react';
import './App.css';
import {p1,p2,p3,p4,p5} from './Users';
import {Pagina} from './Pagina';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      index:0,
      people:[
        p1,p2,p3,p4,p5,
      ],
    }
  }
  handleClick(step){
    const {index} = this.state;
    var a = index;
    a = a + step;
    this.setState({index:a});
  }
  checkDisabled(step){
    const {index, people} = this.state;

    if(step > 0){
      if(index >= people.length-1){
        return true;
      }
      return false;
    }
    if(step < 0){
      if(index <= 0){
        return true;
      }
      return false;
    }
  }
  render() {
    const {people, index} = this.state;
    return (
        <body>
          <h1>
              {people[index].name}
          </h1>
          <button onClick= {()=> this.handleClick(-1)} disabled = {this.checkDisabled(-1)}>Previous Person</button>
          <button onClick= {()=> this.handleClick(1)} disabled = {this.checkDisabled(1)}>Next Person</button>
          <Pagina
          img={people[index].img}
          text={people[index].text}
          index={index}
          /> 
        </body>
    );
  }
}

export default App;
