import { api } from "./shared";

export default {
  login: (email, password) => {
    return api().post("token", JSON.stringify({
      email,
      password
    }));
  },
  register: (email, password) => {
    console.log(JSON.stringify({
      email,
      password
    }));
    return api().post("accounts", JSON.stringify({
      email,
      password
    }));
  },
  fetchRole: () => {
    return api().get("accounts");
  }
};
