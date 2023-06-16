import { setupUserAuthStore } from "../stores";
import { FETCH_USER } from "../services/api/user"
import { GET_COOKIES } from "../utils"

export function setupRoutePermission(routerInstance) {
  routerInstance.beforeEach(async (to, from)=> {
    //console.log({to});
    //console.log({from});
    //console.log({routes: routerInstance.getRoutes()});

    const userAuthStore = setupUserAuthStore();
    const { FN_LOGOUT, FN_SETUP_USERINFO, FN_SETUP_ACCESSTOKEN } = userAuthStore;

    const userAccessToken = GET_COOKIES() || "";
    await FN_SETUP_ACCESSTOKEN(userAccessToken);
    
    if (to.path === "/") {
      if (!userAccessToken) {
        return "/loginPages";
      } else {
        // const { data = {}, status } = await FETCH_USER.getUserInfo();
        // const { result } = data;
        // if (status === 200) {
        //   FN_SETUP_USERINFO(result);
        //   return true;
        // } else {
        //   await FN_LOGOUT();
        //   return "/loginPages";
        // }
      }
    }

    // if (to.path === "/loginPages") {
    //   if (userAccessToken) { 
    //     return false;
    //   } else {
    //     return true;
    //   };
    // };
  });
};
