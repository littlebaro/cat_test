import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const setupUserAuthStore = defineStore("user-auth-store", () => { 
    const userInfo = ref({}); 
    //const userAccessToken = ref(''); 
    return { userInfo };
});