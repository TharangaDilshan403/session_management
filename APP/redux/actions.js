export const SET_USER_NAME ='SET_USER_NAME';
export const SET_USER_PASSWORD='SET_USER_PASSWORD';

export const setUserName = userNameuserName => dispatch =>{
    dispatch({
        type: SET_USER_NAME,
        payload : userName,
    });
};

export const setPassword = password => dispatch =>{
    dispatch({
        type: SET_USER_PASSWORD,
        payload : password,
    });
};