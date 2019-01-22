const axios = require('axios');

export const AddUser = (payload) =>{
    return {
        type:'ADD_USER',
        payload
    }
}

const startLoading = ()=>{
    return{
        type:'START_LOADING',
    }
}

const finishLoading = () =>{
    return{
        type:'FINISH_LOADING',
    }
}

export const generateNewUser = () => dispatch => {
    dispatch(startLoading());
    return axios.get('https://randomuser.me/api/')
        .then(function(response){
            console.log(response);
            dispatch(finishLoading());
        })
        .catch(function(error){
            console.log(error);
            dispatch(finishLoading());
        });
}