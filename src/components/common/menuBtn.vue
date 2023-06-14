<script setup>
    const props = defineProps({
        to: {
            type: String,
            default: "/",
        },
        class: {
            type: String,
            default: "w-52px transition: all 1s ease-out;",
        },
    });
</script> 

<template>
    <router-link :to="props.to" :class="props.class">
        <slot></slot>
    </router-link>
</template>

<style>
    .router-link-exact-active {
        color: #505050;
        width: auto;
        padding: 0px 10px;
        /*text-decoration: underline;*/
        border-radius: 50px;
        background-color: #EFC862;
    }
</style>