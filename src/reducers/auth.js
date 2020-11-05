import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, USER_REQUEST
} from '../actions/user';

const token = localStorage.getItem('token');
export default function auth(state = {
    isFetching: false,
    isAuthenticated: !!token,
    user: null,
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                user: action.user,
                errorMessage: '',
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.payload,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
            });
        case USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: true,
            });
        default:
            return state;
    }
}
