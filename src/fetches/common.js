import * as api from '../services/api'
import { loginUser } from '../actions/user';


/**
 * ログインAPI
*/

export const login = (creds) => {
  return dispatch => {
    console.log(creds);
    if (creds.email.length > 0 && creds.password.length > 0) {
      api.getToken(creds)
        .then(res => {
          console.log(res);
          loginUser(res.data);
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      // dispatch(loginError('Something was wrong. Try again'));
    }

  }
}