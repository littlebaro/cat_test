<template>

    <div class="flex h-77px md:h-105px md:px-40px md:gap-80px items-center md:justify-end justify-between">

        <div class="md:hidden flex w-82px h-61px px-24px py-8px md:m-40px text-41px text-white font-bold items-center">CAT</div>

        <div class="hidden lg:flex h-25px gap-55px text-center"> 

            <router-link to="/" class="w-52px">Home</router-link>

            <router-link to="/Aircle" class="w-52px">Aircle</router-link>

            <div class="w-52px">About</div>

            <div class="w-52px">Loction</div>

            <div class="w-52px">News</div> 

        </div>

        <div class="w-52px items-center cursor-pointer">

            <img class="hidden lg:flex" src="public/search.svg" alt="search"/>

            <img class="lg:hidden block" src="public/stream.svg" alt="stream"/>

        </div>

    </div>

</template>