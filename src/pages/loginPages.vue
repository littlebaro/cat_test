<script setup>
    import { reactive, ref, inject } from "vue"; 
    import { useRouter } from "vue-router"; 
    import { setupUserAuthStore } from "@/stores";
    import { FETCH_USER_A } from "@/services2";

    import MenuBtn from "../components/common/menuBtn.vue";
    import Button from "../components/common/button.vue";

    let labelclass = "text-#9e9e9e"; 
    let myclass = "w-full h-11 border border-#7696E8 focus:outline-#7696E8 rounded-md px-4 py-2 pl-8 text-sm"; 
    let msgclass = "text-red-500"; 
    
    const user = ref({
        username: "system",
        password: "123456",
    }); 

    const author = reactive({
        eyeclose: "/eye-slash-regular.svg",
        eyeopen: "/open_eye.svg",
    });

    const isActive = ref(true);

    function toggleModal() {
        isActive.value = !isActive.value;
    };

    const schema = {
        username: 'required|alpha_num',
        password: 'required|min:6',
    };

    const Swal = inject( "$swal" ); 
    const router = useRouter()

    //const userAuthStore = setupUserAuthStore()
    //const { FN_SETUP_ACCESSTOKEN } = userAuthStore

    async function onSubmit(value) {
        //console.log( "value", value );
        const { data, message, success } = await FETCH_USER_A.login(value)
        console.log( data, success )

        if (!success) return 
        //const { accessToken } = data

        //await FN_SETUP_ACCESSTOKEN(accessToken)
        Swal.fire({
            icon: 'success',
            text: message,
            timer: 3000,
            timerProgressBar: true
        }).then(() => {
            router.push('/')
        });
    }; 
</script>

<template>

    <div class="grid h-100vh bg-gradient-to-b from-#313132 to-#161618"> 

        <div class="grid min-w-360px p-20px gap-20px m-auto  text-#9e9e9e font-normal font-sans">

            <div class="m-auto text-40px font-black">管理者Login</div> 

            <VForm class="grid gap-20px" @submit="onSubmit" :validation-schema="schema">

                <div class="grid gap-3px">

                    <div :class="labelclass">帳號</div>

                    <div class="relative flex before:content-[url(/public/user-regular.svg)] before:w-5 before:ml-2 before:top-2.7 before:absolute">

                        <VField :class="myclass" type="text" name="username" label="帳號" placeholder="請輸入帳號" v-model="user.username" autocomplete="on"/>

                    </div>

                    <VErrMsg :class="msgclass" name="username"/>

                </div>

                <div class="grid gap-3px">

                    <div :class="labelclass">密碼</div>

                    <div class="relative flex before:content-[url(/public/lock-regular.svg)] before:w-5 before:ml-2 before:top-2.7 before:absolute">

                        <VField :class="myclass" :type="isActive ? 'password' : 'text'" name="password" label="密碼" placeholder="請輸入密碼" v-model="user.password"/>

                        <div class="absolute flex items-center w-6 h-8 right-2 cursor-pointer my-1.5" @click="toggleModal">
                            <img :src="isActive ? author.eyeclose : author.eyeopen"/></div>
                    </div>

                    <VErrMsg :class="msgclass" name="password"/>

                </div>

                <Button :type="'submit'">登入</Button>                

                <MenuBtn :to="'/'">home</MenuBtn>

            </VForm>

        </div>

    </div> 

</template>