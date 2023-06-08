<script setup>
  import leftSlider from '@/components/leftSlider.vue';
  import myheader from '@/components/header.vue';
  import myfooter from '@/components/footer.vue';

  import { ref, provide } from "vue";
</script> 

<template> 

  <div class="grid grid-flow-col bg-gradient-to-b from-#161618/60 to-#313132 font-normal font-sans">

    <!-- left -->
    <leftSlider />
    
    <!-- right -->
    <div bg="center md:bottom no-repeat" class="grid  text-#FFFFFF bg-contain bg-[url(/public/Bg_Img.png)]">

        <!-- header -->
        <myheader /> 

        <!-- main  -->
        <div class="flex min-h-[calc(100vh-350px)] md:min-h-[calc(100vh-310px)] px-40px pt-40px md:pt-125px md:px-0px justify-between ">
          <router-view></router-view>
        </div>

        <!-- footer -->
        <myfooter />

    </div> 

  </div>

</template>