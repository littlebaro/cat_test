import { defineStore } from "pinia";
import { ref } from "vue";
import { SET_COOKIES, REMOVE_COOKIES } from "@/utils";

export const setupUserAuthStore = defineStore("user-auth-store", () => { 
    const userInfo = ref({}); 
    const userAccessToken = ref("");

    function FN_SETUP_USERINFO(respUserInfo) {
        return new Promise((resolve) => {
            userInfo.value = respUserInfo || {};
            resolve();
        });
    };

    function FN_SETUP_ACCESSTOKEN(token) {
        return new Promise((resolve) => {
            userAccessToken.value = token;
            SET_COOKIES(token);
            resolve();
        });
    };

    function FN_LOGOUT() {
        return new Promise((resolve) => {
            FN_SETUP_ACCESSTOKEN("");
            FN_SETUP_USERINFO({});
            REMOVE_COOKIES();
            resolve();
        });
    };

    return {
        userInfo,
        userAccessToken,
        FN_LOGOUT,
        FN_SETUP_ACCESSTOKEN,
        FN_SETUP_USERINFO
    };
});