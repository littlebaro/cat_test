import { defineStore } from 'pinia';
import { computed, ref } from 'vue'; 

export const userAuthStore = defineStore('user-auth-store', () => {
    const userInfo = ref({}) 
    return { userInfo } 
})