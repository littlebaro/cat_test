<script setup>
    const props = defineProps({ 
        class: {
            type: String,
            default: "w-auto px-10px py-1px rounded-50px hover:bg-#EFC862/50% duration-500 ease-in-out",
        },
    });
</script> 

<template>

    <router-link :class="props.class" class="props.class">

        <slot></slot>

    </router-link>

</template>

<style>
    .router-link-exact-active,
    .router-link-exact-active:hover {
        color: #505050;
        width: auto;
        /*text-decoration: underline;*/
        background-color: #EFC862;
    } 
</style>