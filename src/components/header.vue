<script setup>
    import { ref, computed } from "vue";
    import { setupUserAuthStore } from "@/stores";
    import Swal from "sweetalert2"; 
    import { GET_COOKIES } from "@/utils"

    import MenuBtn from "../components/common/menuBtn.vue";

    const accessToken = GET_COOKIES() || ""; 
    const isAccessToken = ref(accessToken);

    const myLogin = computed(() => { 
        return isAccessToken.value == "" ? 
        { "text": "login", "myclisk":"" } : 
        { "text": "loginOut", "myclisk": loginOut } 
    });

    const userAuthStore = setupUserAuthStore();
    const { FN_LOGOUT } = userAuthStore; 
    
    async function loginOut() {
        FN_LOGOUT();
        Swal.fire({
            icon: 'success',
            text: "登出成功",
            timer: 3000,
            timerProgressBar: true
        }); 
    };
     
    const menuHidden = ref( false ); 
    function toggleMudel() {
        menuHidden.value = !menuHidden.value; 
    }; 
</script> 

<template>

    <div class="flex h-77px md:h-105px md:pl-40px md:gap-80px items-center md:justify-end justify-between duration-500 sticky top-0">

        <div class="md:hidden flex w-82px h-61px px-24px py-8px md:m-40px text-41px text-white font-bold items-center">CAT</div>

        <div class="hidden lg:flex gap-55px text-center"> 

            <MenuBtn :to="'/'">Home</MenuBtn>

            <MenuBtn :to="'Aircle'">Aircle</MenuBtn>

            <MenuBtn :to="'userGuide'">userGuide</MenuBtn>

            <MenuBtn :to="'News'">News</MenuBtn>

            <MenuBtn :to="'loginPages'" @click="myLogin.myclisk">{{ myLogin.text }}</MenuBtn>

        </div>

        <div class="w-52px items-center cursor-pointer">

            <img class="hidden lg:flex" src="public/search.svg" alt="search"/>

            <img class="lg:hidden block" src="public/stream.svg" alt="stream" @click="toggleMudel"/>

        </div>

    </div>
    
    <Transition name="fade">

        <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-#313132 to-#161618 z-50 fixed top-0" :class="menuHidden ? 'block' : 'hidden'" v-if="menuHidden" >

            <div class="w-82px h-61px px-24px py-8px md:m-40px text-41px text-white font-bold items-center">CAT</div>

            <div class="grid h-25px p-40px gap-15px text-center justify-end">
                
                <MenuBtn :to="'/'" @click="toggleMudel">Home</MenuBtn>

                <MenuBtn :to="'Aircle'" @click="toggleMudel">Aircle</MenuBtn>

                <MenuBtn :to="'About'" @click="toggleMudel">About</MenuBtn>

                <MenuBtn :to="'News'" @click="toggleMudel">News</MenuBtn>

                <MenuBtn :to="'loginPages'" @click="myLogin.myclisk">{{ myLogin.text }}</MenuBtn>

            </div>

            <div class="w-52px items-center cursor-pointer absolute top-24px right-0px"> 

                <img src="public/close.svg" alt="stream" @click="toggleMudel"/>

            </div>

        </div>
        
    </Transition>

</template>