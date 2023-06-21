<script setup>
  import { ref, computed } from "vue";
  import { GET_COOKIES } from "@/utils"  

  import leftSlider from "@/components/leftSlider.vue";
  import myheader from "@/components/header.vue";
  import myfooter from "@/components/footer.vue";
  import Bgcover from "@/components/common/Bgcover.vue";
  
  const accessToken = GET_COOKIES() || "";
  const isAccessToken = ref(accessToken); 
</script> 

<template> 
    
  <div class="grid grid-flow-col bg-gradient-to-b from-#313132 to-#161618 font-normal font-sans relative">

    <Bgcover v-if="isAccessToken"></Bgcover>
    
    <!-- left --> 
    <leftSlider /> 
    
    <!-- right -->
    <div bg="center md:bottom no-repeat" class="grid grid-rows-[105px_minmax(calc(100vh-310px),1fr)_auto] text-#FFFFFF bg-contain bg-[url(/public/Bg_Img.png)]">

        <!-- header -->
        <myheader /> 

        <!-- main -->
        <router-view ></router-view>

        <!-- footer -->
        <myfooter class="z-1"/>

    </div>

  </div> 

</template>


