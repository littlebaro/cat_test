<script setup>
    import { ref } from "vue";
    import menuBtn from "../components/common/menuBtn.vue";

    const menuHidden = ref( false );  
    
    function toggleMudel() {
        menuHidden.value = !menuHidden.value; 
    };
</script> 

<template>

    <div class="flex h-77px md:h-105px md:pl-40px md:gap-80px items-center md:justify-end justify-between duration-500 sticky top-0">

        <div class="md:hidden flex w-82px h-61px px-24px py-8px md:m-40px text-41px text-white font-bold items-center">CAT</div>

        <div class="hidden lg:flex h-25px gap-55px text-center"> 

            <menuBtn :to="'/'">Home</menuBtn>

            <menuBtn :to="'/Aircle'">Aircle</menuBtn>

            <menuBtn :to="'/About'">About</menuBtn>

            <menuBtn :to="'/News'">News</menuBtn>

            <menuBtn :to="'/loginPages'">Login</menuBtn>  

        </div>

        <div class="w-52px items-center cursor-pointer">

            <img class="hidden lg:flex" src="public/search.svg" alt="search"/>

            <img class="lg:hidden block" src="public/stream.svg" alt="stream" @click="toggleMudel"/>

        </div>

    </div>

    <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-#313132 to-#161618 z-50" :class="menuHidden ? 'block' : 'hidden'" v-if="menuHidden">

        <div class="w-82px h-61px px-24px py-8px md:m-40px text-41px text-white font-bold items-center">CAT</div>

        <div class="grid h-25px p-40px gap-15px text-center justify-end">
            
            <menuBtn :to="'/'" @click="toggleMudel">Home</menuBtn>

            <menuBtn :to="'/Aircle'" @click="toggleMudel">Aircle</menuBtn>

            <menuBtn :to="'/About'" @click="toggleMudel">About</menuBtn>

            <menuBtn :to="'/News'" @click="toggleMudel">News</menuBtn>

            <menuBtn :to="'/loginPages'" @click="toggleMudel">Login</menuBtn> 

        </div>

        <div class="w-52px items-center cursor-pointer absolute top-24px right-0px"> 

            <img src="public/close.svg" alt="stream" @click="toggleMudel"/>

        </div>

    </div>

</template>