export const baseURL = "http://localhost:57059/api/v1/";
export const tokenField = "accessToken";
export const currentFolderId = null;

export const tokenActions = {
    set: token => {
      window.localStorage.setItem(tokenField, token);
    },
  
    get: () => {
      return window.localStorage.getItem(tokenField);
    }
  };
