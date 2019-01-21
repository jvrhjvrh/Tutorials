import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import './userCard.css';

const UserCard = ({img, id, name, history}) => {
    return(
        <div className='card'>
            <div>
                <img className='userImg' src = {img} onClick={()=>{history.push('user/'+ id)}} />
            </div>
            <Link to={'user/' + id}>
                {name}
            </Link>
        </div>
    );
}

export default withRouter(UserCard);