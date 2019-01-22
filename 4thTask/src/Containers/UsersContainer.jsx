import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Pagina} from './../Pages/Pagina';

class UsersContainer extends Component {
  render() {
    console.log(this)
    const people = this.props.state;
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
const mapStateToProps = function(state){
  return {state};
}
export default withRouter(connect(mapStateToProps)(UsersContainer));
