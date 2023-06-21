<script setup> 
    import leftSlider from "@/components/leftSlider.vue";
    import headerGuide from "@/components/headerGuide.vue";
    import homeInfoGuide from "@/components/homeInfoGuide.vue";
    import myfooter from "@/components/footer.vue";
</script> 

<template> 

    <div class="grid grid-flow-col w-100vw bg-gradient-to-b from-#313132/60% to-#161618/60% absolute text-red-500 z-40">

        <!-- left --> 
        <leftSlider class="opacity-0"/>
    
        <!-- right -->
        <div bg="center md:bottom no-repeat" class="grid md:w-[calc(100vw-162px)] grid-rows-[105px_minmax(calc(100vh-310px),1fr)_auto] text-#FFFFFF">

            <!-- header -->
            <headerGuide>

                <template #headerTest>
                    <div class="absolute -bottom-40px left-50%">我是headerGuid</div> 
                </template> 

            </headerGuide>

            <!-- main  -->
            <homeInfoGuide>

                <template #test>
                    <div class="absolute -bottom-40px -left-25% ml-50%">我是homeInfoGuid</div> 
                </template> 
        
            </homeInfoGuide>

            <!-- footer -->
            <myfooter class="z-1 opacity-0"/>

        </div>

    </div>

</template>