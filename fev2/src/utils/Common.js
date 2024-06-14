export const setTokenLocal = (token) => {
    sessionStorage.setItem("token", token);
  };
  
  export const getTokenLocal = () => {
    return sessionStorage.getItem("token") || null;
  };
  
  export const removeUserSession = () => {
    sessionStorage.removeItem("token");
  };
  