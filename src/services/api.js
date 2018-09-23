import axios from 'axios';
import {baseURL, tokenActions} from "./shared";

export const api = () => {
  let token = tokenActions.get();

  let instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: { "Content-Type": "application/json" }
  });
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return instance;
};
