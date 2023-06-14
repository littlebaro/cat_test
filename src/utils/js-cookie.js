import Cookies from "js-cookie";

const TokenKey = "demoDay";

export function GET_COOKIES() {
  return Cookies.get( TokenKey );
};

export function SET_COOKIES(token) {
  return Cookies.set( TokenKey, token );
};

export function REMOVE_COOKIES() {
  return Cookies.remove( TokenKey );
};
