import appConfig from '../config';
import * as api from '../services/api'
import * as constant from '../constants'


export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const USER_REQUEST = 'USER_REQUEST'

function requestUser() {
  return {
    type : USER_REQUEST
  };
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

export function receiveLogin(user, id_token) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user: user,
    id_token: user.id_token,
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem(constant.ID_TOKEN);
    document.cookie = 'id_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    dispatch(receiveLogout());
  };
}

export function loginUser(creds) {
  
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    if(process.env.NODE_ENV === "development") {
    return api.getToken(creds)
      .then(response => {
        if (response.status !== 200) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(response.message));
          return Promise.reject(response);
        }
        const data = response.data;

        localStorage.setItem(constant.ID_TOKEN, data.id_token);
        api.getUser(data.id_token)
          .then(res => {
            if (res.status !== 200) {
              dispatch(loginError(res.message));
              return Promise.reject(response);
            }
            dispatch(receiveLogin(res.data, data.id_token));
          })
          .catch(err => {
            console.error('Error: ', err)
            dispatch(loginError(err));
          })
        // Dispatch the success action
        return Promise.resolve(data);
      })
      .catch(err => {
        console.error('Error: ', err)
        dispatch(loginError(err));
      });
    } else {
      localStorage.setItem(constant.ID_TOKEN, appConfig.id_token);
      dispatch(receiveLogin({id_token: appConfig.id_token}))
    }
  };
}

export function getUser() {
  const idToken = localStorage.getItem(constant.ID_TOKEN);
  if (idToken !== null) {
    return dispatch => {
      dispatch(requestUser());
      api.getUser(idToken)
      .then(res => {
        if (res.status !== 200) {
          dispatch(loginError(res.message));
          return Promise.reject(res);
        }
        dispatch(receiveLogin(res.data, idToken));
      })
      .catch(err => {
        console.error('Error: ', err)
        dispatch(loginError(err));
      });
    }
  }
}
