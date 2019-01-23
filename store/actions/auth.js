import { AUTH_SUCCESS } from "../constants/auth";

export const authSuccess = (userData) => {
  return {
    type: AUTH_SUCCESS,
    payload: userData
  }
}