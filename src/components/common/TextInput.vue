<script setup>
    import { toRef } from 'vue';
    import { useField } from 'vee-validate';

    const props = defineProps({
        type: {
            type: String,
            default: "text",
        },
        class: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "name",
        },
        value: {
            type: String,
            default: '',
        },
        label: {
            type: String, 
        },
        placeholder: {
            type: String,
            default: "請輸入",
        },
        rules: {
            type: [ Object, String, Array, Function ],
            default: undefined,
        },
        successMessage: {
            type: String,
            default: "",
        },
        beforeIcon: {
            type: String,
            default: "",
        },
    }); 

    const typeRef = toRef(props, "type");
    const classRef = toRef(props, "class");
    const valueRef = toRef(props, "value");
    const nameRef = toRef(props, "name");
    const labelRef = toRef(props, "label");
    const rules = toRef(props, "rules");

    const {
        value: inputValue,
        errorMessage,
        handleBlur,
        handleChange,
        meta,
    } = useField( nameRef, rules, {
        initialValue: valueRef,
    });
</script> 

<template>

    <div class="grid gap-3px">

        <label :for="labelRef" class="text-#9e9e9e">{{ labelRef }}</label>

        <div class="relative flex before:w-5 before:ml-2 before:top-2.7 before:absolute" :class="props.beforeIcon">

            <VField 
                :id="nameRef" 
                :type="typeRef"
                :value="inputValue"
                :name="nameRef" 
                :label="labelRef" 
                :placeholder="props.placeholder"
                @input="handleChange"
                @blur="handleBlur"
                class="w-full h-11 border border-#7696E8 focus:outline-#7696E8 rounded-md px-4 py-2 pl-8 text-sm"
                :class="[{ '!bg-#fddfe2': !!errorMessage, ' !bg-#e0eee4': meta.validated } ]"
                />

            <slot name="password"></slot>

            <slot name="backIcon"></slot>
             
        </div>

        <!--p class="help-message" v-show="errorMessage || meta.valid">
          {{ errorMessage || successMessage }}
        </p-->
        
        <VErrMsg class="text-red-500" :name="nameRef"/>

    </div>

</template>