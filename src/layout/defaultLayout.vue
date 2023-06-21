<script setup>
  //import Header from '@/components/Header.vue';
  //import Footer from '@/components/Footer.vue';
</script>

<template>
  <!--Header/--> 
    
  <!--router-view></router-view-->
  
  <div class="grid bg-gradient-to-b from-#313132 to-#161618 relative"> 

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

  </div>
  
  <!--Footer/-->
</template> 