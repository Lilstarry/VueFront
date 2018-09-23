import {tokenActions} from "../../services/shared";
import axios from 'axios';

export const baseURL = "http://localhost:57059/api/v1/";
export const tokenField = "accessToken";
export const log = () => (...args) => {
  console.log(args);
};

export const api = () => {
  let token = tokenActions.get();

  let instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: { "Content-Type": "application/json" }
  });
  if (token) {
    instance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  }
  return instance;
};
