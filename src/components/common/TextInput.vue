<script setup>
    import { useSlots } from "vue";

    const slots = useSlots();

    const props = defineProps({
        type: {
            type: String,
            default: "text",
        },
        class: {
            type: String,
            default: "w-full h-11 border border-#7696E8 focus:outline-#7696E8 rounded-md px-4 py-2 pl-8 text-sm",
        },
        name: {
            type: String,
            default: "name",
        },
        label: {
            type: String,
            default: "label",
        },
        placeholder: {
            type: String,
            default: "請輸入",
        },
        beforeIcon: {
            type: String,
            default: "",
        },
    }); 
</script> 

<template>

    <div class="grid gap-3px">

        <label :for="props.name" class="text-#9e9e9e">{{ props.label }}</label>

        <div class="relative flex before:w-5 before:ml-2 before:top-2.7 before:absolute" :class="props.beforeIcon">

            <VField 
                :id="props.name" 
                :class="props.class"
                :type="props.type" 
                :name="props.name" 
                :label="props.label" 
                :placeholder="props.placeholder"
                class="props.class"/>

            <slot name="password"></slot>

            <slot name="backIcon"></slot>
             
        </div>
        
        <VErrMsg class="text-red-500" :name="props.name"/>

    </div>

</template>