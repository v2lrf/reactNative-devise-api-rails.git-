import {AUTH_SUCCESS} from '../constants/auth'

const initialState = {
  userId: null,
  username: '',
  email: '',
  isAdmin: '',
  token: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case AUTH_SUCCESS:
    return { ...state, ...payload }

  default:
    return state
  }
}
