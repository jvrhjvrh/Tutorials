import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import UserCard from '../Components.jsx/UserCard';

const Home = (state) =>{
    console.log(state.state);
    return(
        <div> 
            <p>
                Pagina inicial
            </p>
            <div className = 'cardHolder'>
                {state.state.map((index, key) => {
                    console.log(index);
                return(
                    <UserCard name={index.name} img = {index.img[0]} id={key} />
                )
                })}
            </div>
            <div>
                <button onClick={()=> {state.history.push('new-user')}}>Create new User</button>
            </div>
        </div>
    );
}
const mapStateToProps = function(state) {
    return {
        state
    }
}

export default withRouter(connect(mapStateToProps)(Home));