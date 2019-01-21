import React, { Component } from 'react';
import {p1,p2,p3,p4,p5} from './../Users';
import {withRouter} from 'react-router-dom'
import {Pagina} from './../Pages/Pagina';

class UsersContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      index:0,
      people:[
        p1,p2,p3,p4,p5,
      ],
    }
  }
  render() {
    const {people} = this.state;
    const {history} = this.props;
    const {userId} = this.props.match.params
    return (
        <body>
          <h1>
              {people[userId].name}
          </h1>
          <Pagina
          img={people[userId].img}
          text={people[userId].text}
          index={userId}
          /> 
          <button onClick={()=>history.push('')}>Home</button>
        </body>
    );
  }
}
export default withRouter(UsersContainer);
