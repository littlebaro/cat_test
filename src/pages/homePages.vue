<script setup>
  import leftSlider from "@/components/leftSlider.vue";
  import myheader from "@/components/header.vue";
  import myfooter from "@/components/footer.vue"; 
</script> 

<template> 

  <div class="grid grid-flow-col bg-gradient-to-b from-#313132 to-#161618 font-normal font-sans relative">

    <!-- left -->
    <leftSlider />
    
    <!-- right -->
    <div bg="center md:bottom no-repeat" class="grid grid-rows-[105px_minmax(calc(100vh-310px),1fr)_auto] text-#FFFFFF bg-contain bg-[url(/public/Bg_Img.png)]">

        <!-- header -->
        <myheader /> 

        <!-- main  -->
        <router-view></router-view>

        <!-- footer -->
        <myfooter class="z-1"/>

    </div>  

  </div>

</template>