<script setup>
    const props = defineProps({
        type:{
            type: String,
            default: "text",
        },
        class: {
            type: String,
            default: "w-full h-11  !bg-#EFC862/100% mx-auto rounded-full focus:outline-#EFC862 hover: text-#505050 text-lg hover:border hover: border-#ffffff! hover:font-bold",
        }
    });
</script> 

<template>

    <button :type="props.type" :class="props.class"> 

        <slot></slot>
        
    </button>

</template>