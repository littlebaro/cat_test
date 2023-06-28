<script setup>
    import { reactive, ref, inject } from "vue"; 
    import { useRouter } from "vue-router"; 
    import { setupUserAuthStore } from "@/stores";
    import { FETCH_USER_A } from "@/services2";
    import { useForm } from 'vee-validate';

    import MenuBtn from "../components/common/menuBtn.vue";
    import Button from "../components/common/button.vue";
    import TextInput from "../components/common/TextInput.vue"; 

    const formValidationSchema = {
        account: 'required|alpha_num',
        password: 'required|alpha_num|min:6',
    };

    const author = reactive({
        eyeclose: "/eye-slash-regular.svg",
        eyeopen: "/open_eye.svg",
    });

    const isActive = ref(true);

    function toggleModal() {
        isActive.value = !isActive.value;
    };

    const Swal = inject( "$swal" ); 
    const router = useRouter();

    const userAuthStore = setupUserAuthStore();
    const { FN_SETUP_ACCESSTOKEN } = userAuthStore;

    async function onSubmit(value) {
        const { data, message, success } = await FETCH_USER_A.login(value)
        //console.log( data, success ) 

        if (!success) return 
        const { accessToken } = data

        await FN_SETUP_ACCESSTOKEN(accessToken)
        Swal.fire({
            icon: 'success',
            text: message,
            timer: 3000,
            timerProgressBar: true
        }).then(() => {
            router.push('/homePage')
        }); 
    };
</script>

<template>

    <div class="grid h-100vh bg-gradient-to-b from-#313132 to-#161618"> 

        <div class="grid min-w-360px p-20px gap-20px m-auto  text-#9e9e9e font-normal font-sans">

            <div class="m-auto text-40px font-black">管理者Login</div> 

            <VForm class="grid gap-20px" @submit="onSubmit" :validation-schema="formValidationSchema">

                <TextInput type="text" name="account" label="帳號" placeholder="請輸入帳號"  beforeIcon="before:content-[url(/public/user-regular.svg)]" autocomplete="on"></TextInput>

                <TextInput :type="isActive ? 'password' : 'text'" name="password" label="密碼" placeholder="請輸入密碼" beforeIcon="before:content-[url(/public/lock-regular.svg)]" autocomplete="off">

                    <template #password>

                        <div class="absolute flex items-center w-6 h-8 right-2 cursor-pointer my-1.5" @click="toggleModal">

                            <img :src="isActive ? author.eyeclose : author.eyeopen"/>
                    
                        </div>

                    </template>
                
                </TextInput>

                <Button type="submit">登入</Button>                

                <MenuBtn to="homePage" class="w-60px h-auto text-center border-1px border-#ffffff/30% hover:border-1px  hover:border-#ffffff/50% rounded-50px duration-100 ease-in-out">home</MenuBtn> 

            </VForm>

        </div>

    </div>

</template>