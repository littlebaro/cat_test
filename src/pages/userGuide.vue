<template> 
    <div class="flex flex-1 w-100% relative bg-#ffffff">
        <main class="w-full pt-0px ">
            <section>
                <div class="w-full top-0 left-0 py-10px px-5% bg-gradient-to-b md:to-#C3E7F9 from-#A4DAF6/100 flex flex-col gap-y-10px md:gap-y-0 md:flex-row md:items-center md:justify-between duration-300 to-#C3E7F9">
                    <div class="flex items-center md:hidden w-full">
                        <svg class="w-30px svg-inline--fa fa-bars-sort text-32px cursor-pointer" aria-hidden="true"
                            focusable="false" data-prefix="far" data-icon="bars-sort" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path class="" fill="currentColor"
                                d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM192 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H168c13.3 0 24 10.7 24 24z">
                            </path>
                        </svg>
                    </div> 
                    <h1 class="indent-101% overflow-hidden whitespace-nowrap bg-[url(https://myttgo.cbsdinfo.com.tw/images/header/logo-rwd.svg)] md:bg-[url(https://myttgo.cbsdinfo.com.tw/images/header/logo.svg)] bg-no-repeat h-50px w-120px bg-contain hidden md:block">
                        <a class="block h-full" title="前往臺東交通預約媒合平台首頁">
                            臺東交通預約媒合平台
                        </a>
                    </h1>
                    <!-- 電腦版選單 -->
                    <ul class="hidden md:flex items-center justify-end gap-y-30px gap-y-0 gap-x-16px text-18px text-#3f3f3f text-black p-20px duration-300 relative z-45 bg-#ffffff rounded-md">
                        <li class="group relative">
                            <a href="/route" class="relative hover:text-DarkBlue after-content-none after-absolute after-bottom--2px after-left-0 after-bg-DarkBlue after-h-2px after-w-0 hover:after-w-full after-duration-500 after-ease-[cubic-bezier(.99,.12,.15,1)]" title="前往路線資訊">
                                路線資訊
                            </a>
                        </li>
                        <li class="group relative">
                            <p class="relative hover:text-DarkBlue after-content-none after-absolute after-bottom--2px after-left-0 after-bg-DarkBlue after-h-2px after-w-0 hover:after-w-full after-duration-500 after-ease-[cubic-bezier(.99,.12,.15,1)] cursor-default">
                                預約接駁
                            </p>
                            <div class="absolute bg-transparent right-0 -bottom-40px w-200px h-40px pointer-events-none group-hover:pointer-events-auto">
                            </div>
                            <svg width="35" height="35" viewBox="-60 -60 300 300"
                                class="absolute -bottom-30px right-10% md:right-15% absolute hidden md:block opacity-0 group-hover:opacity-100">
                                <polygon class="fill-white stroke-white" stroke-linejoin="round"
                                    points="100,0 0,200 200,200">
                                </polygon>
                            </svg>
                            <ul class="custom__scroll_bar absolute -bottom-275px right-0 h-250px overflow-y-auto rounded-10px shadow-[4px_4px_4px_rgba(0,0,0,0.25)] bg-white min-w-200px flex flex-col mt-20px mt-0 gap-y-4px text-20px opacity-0 duration-150 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-1">
                                <li>
                                    <a href="/booking/394604656807942"
                                        class="block py-7px px-14px hover:text-DarkBlue hover:fw-700">
                                        計程車
                                    </a>
                                </li>
                                <li>
                                    <a href="/booking/394604562976774"
                                        class="block py-7px px-14px hover:text-DarkBlue hover:fw-700">
                                        TTGO幹線
                                    </a>
                                </li>
                                <li>
                                    <a href="/booking/394604520185862"
                                        class="block py-7px px-14px hover:text-DarkBlue hover:fw-700">
                                        幸福巴士
                                    </a>
                                </li>
                                <li>
                                    <a href="https://taisocbus.taitung.gov.tw/ServiceNotes" target="_blank"
                                        title="前往預約臺東縣復康巴士(另開新視窗)"
                                        class="block py-7px px-14px hover:text-DarkBlue hover:fw-700">
                                        復康巴士
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ttshbltc.ttshb.gov.tw/ltcare_11.php" target="_blank"
                                        title="前往臺東縣長期照顧管理中心網站(另開新視窗)"
                                        class="block py-7px px-14px hover:text-DarkBlue hover:fw-700">
                                        長照服務
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="group relative">
                            <a href="/records"
                                class="relative hover:text-DarkBlue after-content-none after-absolute after-bottom--2px after-left-0 after-bg-DarkBlue after-h-2px after-w-0 hover:after-w-full after-duration-500 after-ease-[cubic-bezier(.99,.12,.15,1)]"
                                title="前往訂單查詢">
                                訂單查詢
                            </a>
                        </li>
                        <li>
                            <a href="/login" class="relative hover:text-DarkBlue after-content-none after-absolute after-bottom--2px after-left-0 after-bg-DarkBlue after-h-2px after-w-0 hover:after-w-full after-duration-500 after-ease-[cubic-bezier(.99,.12,.15,1)] flex gap-x-4px items-center block"
                                title="前往登入/註冊">
                                <svg class="svg-inline--fa fa-user w-20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path class="" fill="currentColor"
                                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z">
                                    </path>
                                </svg>
                                登入/註冊
                            </a>
                        </li>
                    </ul>

                    <!-- 手機板選單 -->
                    <div class="block md:hidden fixed w-3/4 h-screen top-0 bg-gradient-to-b from-DarkBlue to-LightBlue duration-300 p-5% left--100%">
                        <svg class="svg-inline--fa fa-xmark text-white text-32px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path class="" fill="currentColor"
                                d="M313 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L41 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L7 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L279 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L313 137z">
                            </path>
                        </svg>
                        <ul class="absolute top-[calc(5%+30px)] left-5% w-90% h-[calc(90%-40px)] flex flex-col gap-y-14px overflow-y-auto text-20px text-white px-10%">
                            <li>
                                <a aria-current="page" href="/"
                                    class="router-link-active router-link-exact-active block">
                                    首頁
                                </a>
                            </li>
                            <li>
                                <a href="/route" class="block">
                                    路線資訊
                                </a>
                                <!--v-if-->
                            </li>
                            <li>
                                <button class="flex items-center gap-x-6px block">
                                    <p>
                                        預約接駁
                                    </p>
                                    <svg class="svg-inline--fa fa-triangle text-12px duration-300" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path class="" fill="currentColor" d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480H472c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z">
                                        </path>
                                    </svg>
                                </button>
                                <ul class="flex flex-col overflow-y-hidden duration-300 max-h-0 opacity-0">
                                    <li>
                                        <a href="/booking/394604656807942" class="block py-7px px-14px">
                                            計程車
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/booking/394604562976774" class="block py-7px px-14px">
                                            TTGO幹線
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/booking/394604520185862" class="block py-7px px-14px">
                                            幸福巴士
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://taisocbus.taitung.gov.tw/ServiceNotes" target="_blank"
                                            title="前往預約臺東縣復康巴士(另開新視窗)" class="block py-7px px-14px">
                                            復康巴士
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://ttshbltc.ttshb.gov.tw/ltcare_11.php" target="_blank"
                                            title="前往臺東縣長期照顧管理中心網站(另開新視窗)" class="block py-7px px-14px">
                                            長照服務
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/records" class="block">
                                    訂單查詢
                                </a>
                                <!--v-if-->
                            </li>
                            <li>
                                <a href="/login" class="block">
                                    登入/註冊
                                </a>
                            </li>
                        </ul>
                        <img src="https://myttgo.cbsdinfo.com.tw/images/header/fish-rwd.svg" alt="飛魚" class="absolute right-10% bottom-5%">
                    </div>
                </div>
            </section>
            
            <div class="min-h-[calc(100vh-394px)] lg:min-h-[calc(100vh-421px)]">
                <section>
                    
                    <img src="https://myttgo.cbsdinfo.com.tw/images/header/header.svg" alt="header"
                        class="absolute left-0 w-full select-none pointer-events-none z-2 top-102px md:top-70px hidden md:block top-102px md:top-70px">

                    <img src="https://myttgo.cbsdinfo.com.tw/images/header/header-rwd.svg" alt="header" class="absolute left-0 w-full select-none pointer-events-none z-2 block md:hidden top-102px md:top-70px">

                    <div class="w-full block md:hidden pt-12px pl-5% bg-gradient-to-b from-#C2E7F9 to-#D5EEFC relative z-50">
                        <h2
                            class="indent-101% overflow-hidden whitespace-nowrap bg-[url(https://myttgo.cbsdinfo.com.tw/images/header/logo.svg)] md:bg-[url(https://myttgo.cbsdinfo.com.tw/images/header/logo.svg)] bg-no-repeat h-50px w-120px bg-contain">
                            <router-link to="/" title="前往臺東交通預約媒合平台首頁" class="block h-full">
                                臺東交通預約媒合平台
                            </router-link>
                        </h2>
                    </div>

                    <img src="https://myttgo.cbsdinfo.com.tw/images/header/bottom-cloud.svg" alt="底部雲朵"
                        class="absolute left-0 w-full select-none pointer-events-none z-1 hidden md:block top-125px xxl:top-145px">
                    <img src="https://myttgo.cbsdinfo.com.tw/images/header/bottom-cloud-rwd.svg" alt="底部雲朵"
                        class="absolute left-0 w-full select-none pointer-events-none z-1 block md:hidden top-125px xxl:top-145px">
                    <img src="https://myttgo.cbsdinfo.com.tw/images/home/taitung.png" alt="taitung"
                        class="absolute left-1/2 -translate-x-1/2 w-30% md:w-22% z-2 top-112px md:top-70px">
                    <img src="https://myttgo.cbsdinfo.com.tw/images/header/balloon.svg" alt="熱氣球"
                        class="absolute top-52px md:top-90px right-5% select-none pointer-events-none z-30 w-80px md:w-170px">


                    <div class="mt-100px md:mt-220px xxl:mt-270px">
                        <section>
                            <div class="overflow-x-hidden w-90% max-w-1680px mx-auto">
                                <div class="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                                    <a href="/" target="_self" title="前往幸福巴士(另開新視窗)">
                                        <div class="relative w-full pb-[calc(100%/16*9)] md:pb-[calc(100%/16*9)] z-2">
                                            <img loading="lazy" src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230509/415477895094277.png" alt="幸福巴士" class="absolute top-0 left-0 w-full h-full object-cover object-top rounded-md">
                                        </div>
                                    </a>

                                    <div class="w-100% h-30px flex justify-center p-10px">
                                        <span class="bullet bg-#1E3E8F!important">
                                        </span>
                                        <span class="bullet">
                                        </span>
                                        <span class="bullet">
                                        </span>
                                        <span class="bullet">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section> 


                        <div class="-mt-100px">
                            <div class="w-full h-200px sm:h-300px xxl:h-400px top-0 left-0 relative bg-cover bg-bottom bg-no-repeat relative overflow-x-hidden z-1" style="background-image: url('https://myttgo.cbsdinfo.com.tw/images/home/mountain.png');">
                                <!-- 火車 -->
                                <img src="https://myttgo.cbsdinfo.com.tw/images/home/train.png" alt="火車"
                                    class="absolute select-none pointer-events-none bottom-10.5% right-10% w-60% train hidden sm:block z-2">
                                <!-- RWD火車 -->
                                <img src="https://myttgo.cbsdinfo.com.tw/images/home/train.png" alt="火車"
                                    class="absolute select-none pointer-events-none bottom-7% -right-100% w-full train block sm:hidden z-2">
                            </div>
                        </div>

                    </div>
                    
                    <!-- 預約路線類別 -->
                    <div src="https://myttgo.cbsdinfo.com.tw/images/booking/booking-bg.png" class="bg-cover bg-no-repeat pt-20px md:pt-64px -mb-300px pb-350px" style="background-image: url('https://myttgo.cbsdinfo.com.tw/images/booking/booking-bg.png')">

                        <section>
                            <div class="hidden md:flex items-center justify-center mb-40px gap-x-10px">
                                <div class="flex items-center gap-x-5.5px">
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                </div>
                                <h2 class="text-20px md:text-30px fw-700">
                                    預約接駁
                                </h2>
                                <div class="flex items-center gap-x-5.5px">
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                </div>
                            </div>

                            <!-- 電腦版預約列表 -->
                            <ul class="w-90% max-w-1680px mx-auto md:grid-cols-3 gap-18px p-20px hidden md:grid fadeup__outer z-49 relative bg-#FDFBF5 rounded-lg">

                                <li class="p-12px md:p-24px bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-full bg-#000000 after-z-0 fadeup">
                                    <a class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230311\394613665624069.png" alt="" class="absolute w-full h-full object-cover inset-0 opacity-65">
                                    <h3 class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        計程車
                                    </h3>
                                    <p class="z-1 text-white mb-auto">
                                        只要您在台東縣內，要前往臺東任何一個地方，皆可以使用此訂車服務。
                                    </p>

                                    <a class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-40px py-12px self-center items-center z-1 flex gap-x-5px group z-3" title="前往預約計程車">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>

                                <li class="p-12px md:p-24px bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-full bg-#000000 after-z-0 fadeup">
                                    <a class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230321\398195697201157.jpg" alt="" class="absolute w-full h-full object-cover inset-0 opacity-65">
                                    <h3 class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        TTGO幹線
                                    </h3>
                                    <p class="z-1 text-white mb-auto">
                                        TTGO安排了6條路線，民眾可以找到離自己最近的站點，搭乘TTGO車輛前往主幹線轉乘火車、公車、飛機等公共運輸路網
                                    </p>
                                    <a class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-40px py-12px self-center items-center z-1 flex gap-x-5px group z-3" title="前往預約TTGO幹線">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li class="p-12px md:p-24px bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-full bg-#000000 after-z-0 fadeup">
                                    <a class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230311/394613665624069.png" alt="" class="absolute w-full h-full object-cover inset-0 opacity-65">

                                    <h3 class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        幸福巴士
                                    </h3>
                                    <p class="z-1 text-white mb-auto">
                                        您如果要預約幸福巴士，請選擇預約接駁的幸福巴士類別，進到內容頁選擇欲搭乘的路線進行訂車。
                                    </p>
                                    <a class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-40px py-12px self-center items-center z-1 flex gap-x-5px z-3" title="前往預約幸福巴士">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>



                            <div class="hidden md:flex items-center justify-center mt-60px mb-40px gap-x-10px">
                                <div class="flex items-center gap-x-5.5px">
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                </div>
                                <h2 class="text-20px md:text-30px fw-700">
                                    其他服務
                                </h2>
                                <div class="flex items-center gap-x-5.5px">
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                    </div>
                                    <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                    </div>
                                </div>
                            </div>
                            <ul class="w-90% max-w-1680px mx-auto grid-cols-2 gap-18px px-0 hidden md:grid fadeup__outer">
                                <li class="p-12px md:p-30px aspect-21/9 bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px justify-center relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-80% after-bg-gradient-to-r after-from-LightYellow after-to-transparent after-z-0 fadeup">
                                    <a href="https://taisocbus.taitung.gov.tw/ServiceNotes" target="_blank"
                                        class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/images/home/bookingBus-2.png" alt="復康巴士的巴士照片" class="absolute w-full h-full object-cover inset-0">
                                    <h3 class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        復康巴士
                                    </h3>
                                    <a href="https://taisocbus.taitung.gov.tw/ServiceNotes" target="_blank"
                                        title="前往預約臺東縣復康巴士(另開新視窗)" class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-40px py-12px self-start z-1 flex items-center gap-x-5px duration-150 hover:bg-DarkBlue hover:text-white group z-3">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px duration-150 group-hover:translate-x-10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>

                                <li class="p-12px md:p-30px aspect-21/9 bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px justify-center relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-80% after-bg-gradient-to-r after-from-LightYellow after-to-transparent after-z-0 fadeup">
                                    <a href="https://ttshbltc.ttshb.gov.tw/ltcare_11.php" target="_blank"
                                        class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/images/home/bookingBus-3.png" alt="臺東縣長趙交通接送車的照片"  class="absolute w-full h-full object-cover inset-0">
                                    <h3 class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        長照服務
                                    </h3>
                                    <a href="https://ttshbltc.ttshb.gov.tw/ltcare_11.php" target="_blank"
                                        title="前往臺東縣長期照顧管理中心網站(另開新視窗)" class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-40px py-12px self-start z-1 flex items-center gap-x-5px duration-150 hover:bg-DarkBlue hover:text-white group z-3">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px duration-150 group-hover:translate-x-10px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            
                            <!-- 手機板預約列表 -->
                            <ul class="w-full flex md:hidden flex-col gap-y-20px px-5% mb-40px">
                                <li class="sticky top-20px">
                                    <h2 class="text-20px md:text-30px fw-700 text-center flex items-center justify-center gap-x-10px mb-20px md:mb-40px md:mt-0 mt-40px">
                                        <div class="flex items-center gap-x-5.5px">
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                        </div>
                                        預約接駁
                                        <div class="flex items-center gap-x-5.5px">
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                        </div>
                                    </h2>
                                </li>
                                <li class="p-20px bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-full after-bg-[rgba(81,81,81,0.5)] after-z-0 fadeup sticky top-100px">
                                    <a href="/booking/394604656807942" class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230311\394613665624069.png"
                                        alt="" class="absolute w-full h-full object-cover inset-0">
                                    <h3 class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        計程車
                                    </h3>
                                    <p class="z-1 text-white mb-auto text-14px md:text-16px line-clamp-3">
                                        只要您在台東縣內，要前往臺東任何一個地方，皆可以使用此訂車服務。
                                    </p>
                                    <a href="/booking/394604656807942"
                                        class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-50px py-8px self-center items-center z-1 flex gap-x-5px duration-150 hover:bg-DarkBlue hover:text-white group"
                                        title="前往預約計程車">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px duration-150 group-hover:translate-x-10px"
                                            aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li
                                    class="p-20px bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-full after-bg-[rgba(81,81,81,0.5)] after-z-0 fadeup sticky top-100px">
                                    <a href="/booking/394604562976774" class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230321\398195697201157.jpg"
                                        alt="" class="absolute w-full h-full object-cover inset-0">
                                    <h3
                                        class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        TTGO幹線
                                    </h3>
                                    <p class="z-1 text-white mb-auto text-14px md:text-16px line-clamp-3">
                                        TTGO安排了6條路線，民眾可以找到離自己最近的站點，搭乘TTGO車輛前往主幹線轉乘火車、公車、飛機等公共運輸路網
                                    </p>
                                    <a href="/booking/394604562976774"
                                        class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-50px py-8px self-center items-center z-1 flex gap-x-5px duration-150 hover:bg-DarkBlue hover:text-white group"
                                        title="前往預約TTGO幹線">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px duration-150 group-hover:translate-x-10px"
                                            aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li class="p-20px bg-no-repeat bg-cover rounded-10px flex flex-col gap-y-14px relative overflow-hidden after-content-none after-absolute after-top-0 after-left-0 after-h-full after-w-full after-bg-[rgba(81,81,81,0.5)] after-z-0 fadeup sticky top-100px">
                                    <a href="/booking/394604520185862" class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230330\401322913910789.png"
                                        alt="" class="absolute w-full h-full object-cover inset-0">
                                    <h3
                                        class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        幸福巴士
                                    </h3>
                                    <p class="z-1 text-white mb-auto text-14px md:text-16px line-clamp-3">
                                        您如果要預約幸福巴士，請選擇預約接駁的幸福巴士類別，進到內容頁選擇欲搭乘的路線進行訂車。
                                    </p>
                                    <a href="/booking/394604520185862"
                                        class="text-18px text-DarkBlue fw-700 rounded-100px bg-white px-50px py-8px self-center items-center z-1 flex gap-x-5px duration-150 hover:bg-DarkBlue hover:text-white group"
                                        title="前往預約幸福巴士">
                                        立即預約
                                        <svg class="svg-inline--fa fa-arrow-right w-30px duration-150 group-hover:translate-x-10px"
                                            aria-hidden="true" focusable="false" data-prefix="far"
                                            data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path class="" fill="currentColor"
                                                d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <ul class="w-full flex md:hidden flex-col gap-y-20px px-5%">
                                <li class="sticky top-60px">
                                    <h2
                                        class="text-20px md:text-30px fw-700 text-center flex items-center justify-center gap-x-10px mb-20px md:mb-40px md:mt-0">
                                        <div class="flex items-center gap-x-5.5px">
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                        </div>
                                        其他服務
                                        <div class="flex items-center gap-x-5.5px">
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkYellow rotate-45">
                                            </div>
                                            <div class="w-5.5px h-5.5px bg-DarkBlue rotate-45">
                                            </div>
                                        </div>
                                    </h2>
                                </li>
                                <li class="rounded-10px sticky shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-100px">
                                    <a href="https://taisocbus.taitung.gov.tw/ServiceNotes" target="_blank"
                                        class="absolute top-0 left-0 w-full h-full z-2">
                                    </a>
                                    <div class="relative w-full pb-[calc(100%/21*9)]">
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/images/home/bookingBus-2.png" alt="復康巴士的巴士照片"
                                        class="absolute top-0 left-0 w-full h-full object-cover rounded-[10px_10px_0px_0px]">
                                    <div
                                        class="absolute top-0 left-0 w-60% h-full bg-gradient-to-r from-LightYellow to-transparent rounded-[10px_0px_0px_0px]">
                                    </div>
                                </div>
                                <h3
                                    class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] absolute top-1/3 left-24px">
                                    復康巴士
                                </h3>
                                <a href="https://taisocbus.taitung.gov.tw/ServiceNotes" target="_blank"
                                    title="前往預約臺東縣復康巴士(另開新視窗)"
                                    class="text-18px text-DarkBlue fw-700 rounded-[0px_0px_10px_10px] bg-white px-40px py-6px self-start z-1 text-center block gap-x-5px duration-150">
                                    立即預約
                                    <svg class="svg-inline--fa fa-arrow-right w-30px" aria-hidden="true" focusable="false"
                                        data-prefix="far" data-icon="arrow-right" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path class="" fill="currentColor"
                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                        </path>
                                    </svg>
                                </a>
                            </li>

                            <li class="rounded-10px sticky shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-100px">
                                <a href="https://ttshbltc.ttshb.gov.tw/ltcare_11.php" target="_blank"
                                    class="absolute top-0 left-0 w-full h-full z-2">
                                </a>
                                <div class="relative w-full pb-[calc(100%/21*9)]">
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/images/home/bookingBus-3.png" alt="臺東縣長趙交通接送車的照片"
                                        class="absolute top-0 left-0 w-full h-full object-cover rounded-[10px_10px_0px_0px]">
                                    <div
                                        class="absolute top-0 left-0 w-60% h-full bg-gradient-to-r from-LightYellow to-transparent rounded-[10px_0px_0px_0px]">
                                    </div>
                                </div>
                                <h3
                                    class="text-18px md:text-32px fw-700 text-white z-1 text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] absolute top-1/3 left-24px">
                                    長照服務
                                </h3>
                                <a href="https://ttshbltc.ttshb.gov.tw/ltcare_11.php" target="_blank"
                                    title="前往臺東縣長期照顧管理中心網站(另開新視窗)"
                                    class="text-18px text-DarkBlue fw-700 rounded-[0px_0px_10px_10px] bg-white px-40px py-6px self-start z-1 text-center block gap-x-5px duration-150">
                                    立即預約
                                    <svg class="svg-inline--fa fa-arrow-right w-30px" aria-hidden="true" focusable="false"
                                        data-prefix="far" data-icon="arrow-right" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path class="" fill="currentColor"
                                            d="M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>

                <div class="h-45vh md:h-80vh relative bg-contain lg:bg-cover bg-top bg-no-repeat mountain__outer overflow-hidden select-none" style="background-image: url('http://taitungttgo.cbsdinfo.com.tw/images/home/mountain-bg.png')">
                    
                    <div class="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-#fff"></div>
                    
                    <img alt="cloud" class="absolute bottom--120% left-0 w-full h-120% object-cover mountain__cloud" src="http://taitungttgo.cbsdinfo.com.tw/images/home/cloud-1.png">
                    
                    <img alt="cloud" class="absolute bottom--120% left-0 w-full h-120% object-cover mountain__cloud" src="http://taitungttgo.cbsdinfo.com.tw/images/home/cloud-2.png">
                    
                    <img alt="cloud" class="absolute bottom-0% right-0 w-20% object-cover mountain__cloud" src="http://taitungttgo.cbsdinfo.com.tw/images/home/cloud-4.png">

                </div>

                <div class="-mt-150px md:-mt-140px mb-40px md:mb-100px">
                    <section>
                        <ul class="w-full max-w-1440px mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 px-5% gap-26px fadeup__outer">
                            <li class="w-full relative pb-full rounded-full border-2px border-#FFBF60 overflow-hidden fadeup bg-white">
                                <a href="https://www.taitung.gov.tw/" target="_blank" title="前往臺東縣政府網站(另開新視窗)" class="w-full h-full absolute flex items-center justify-center group">
                                    <div class="absolute top-0 left-0 w-full h-full bg-DarkBlue/80 z-9 duration-150 group-hover:opacity-100 opacity-0">
                                    </div>
                                    <h2 class="z-10 opacity-0 text-white fw-700 md:text-20px group-hover:opacity-100 duration-150 text-center px-20px">
                                        臺東縣政府
                                    </h2>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/service/Upfile/20230407\404167143337989.png"  alt="臺東縣政府" class="absolute top-0 left-0 w-full h-full object-cover object-center">
                                </a>
                            </li>
                            <li class="w-full relative pb-full rounded-full border-2px border-#FFBF60 overflow-hidden fadeup bg-white">
                                <a href="https://www.facebook.com/balloontaiwan" target="_blank" title="前往臺灣熱氣球嘉年華粉絲團網站(另開新視窗)" class="w-full h-full absolute flex items-center justify-center group">
                                    <div class="absolute top-0 left-0 w-full h-full bg-DarkBlue/80 z-9 duration-150 group-hover:opacity-100 opacity-0"></div>
                                    <h2 class="z-10 opacity-0 text-white fw-700 md:text-20px group-hover:opacity-100 duration-150 text-center px-20px">
                                        臺灣熱氣球嘉年華粉絲團
                                    </h2>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/service/Upfile/20230407\404166933733381.png" alt="臺灣熱氣球嘉年華粉絲團" class="absolute top-0 left-0 w-full h-full object-cover object-center">
                                </a>
                            </li>
                            <li class="w-full relative pb-full rounded-full border-2px border-#FFBF60 overflow-hidden fadeup bg-white">
                                <a href="https://www.facebook.com/taiwanopenofsurfing" target="_blank" title="前往臺灣國際衝浪公開賽粉絲團網站(另開新視窗)" class="w-full h-full absolute flex items-center justify-center group">
                                    <div class="absolute top-0 left-0 w-full h-full bg-DarkBlue/80 z-9 duration-150 group-hover:opacity-100 opacity-0"></div>
                                    <h2 class="z-10 opacity-0 text-white fw-700 md:text-20px group-hover:opacity-100 duration-150 text-center px-20px">
                                        臺灣國際衝浪公開賽粉絲團
                                    </h2>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/service/Upfile/20230407\404166681489413.png" alt="臺灣國際衝浪公開賽粉絲團" class="absolute top-0 left-0 w-full h-full object-cover object-center">
                                </a>
                            </li>
                            <li class="w-full relative pb-full rounded-full border-2px border-#FFBF60 overflow-hidden fadeup bg-white">
                                <a href="https://www.facebook.com/StarryTaitung" target="_blank"
                                    title="前往臺東最美星空粉絲團網站(另開新視窗)"
                                    class="w-full h-full absolute flex items-center justify-center group">
                                    <div
                                        class="absolute top-0 left-0 w-full h-full bg-DarkBlue/80 z-9 duration-150 group-hover:opacity-100 opacity-0">
                                    </div>
                                    <h2 class="z-10 opacity-0 text-white fw-700 md:text-20px group-hover:opacity-100 duration-150 text-center px-20px">
                                        臺東最美星空粉絲團
                                    </h2>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/service/Upfile/20230407\404163907604485.jpg" alt="臺東最美星空粉絲團" class="absolute top-0 left-0 w-full h-full object-cover object-center">
                                </a>
                            </li>
                            <li class="w-full relative pb-full rounded-full border-2px border-#FFBF60 overflow-hidden fadeup bg-white">
                                <a href="https://www.facebook.com/SlowFoodTaitung" target="_blank" title="前往發現臺東慢食粉絲團網站(另開新視窗)" class="w-full h-full absolute flex items-center justify-center group"> 
                                    <div class="absolute top-0 left-0 w-full h-full bg-DarkBlue/80 z-9 duration-150 group-hover:opacity-100 opacity-0"> </div>
                                    <h2 class="z-10 opacity-0 text-white fw-700 md:text-20px group-hover:opacity-100 duration-150 text-center px-20px">
                                        發現臺東慢食粉絲團
                                    </h2>
                                    <img src="http://taitungttgo.cbsdinfo.com.tw/service/Upfile/20230407\404163552952325.jpg" alt="發現臺東慢食粉絲團" class="absolute top-0 left-0 w-full h-full object-cover object-center">
                                </a>
                            </li>
                            <li class="w-full relative pb-full rounded-full border-2px border-#FFBF60 overflow-hidden fadeup bg-white">
                                <a href="https://www.facebook.com/DiveGreenIsland.Taiwan" target="_blank" title="前往綠島豆丁海馬海底郵筒網站(另開新視窗)" class="w-full h-full absolute flex items-center justify-center group">
                                    <div class="absolute top-0 left-0 w-full h-full bg-DarkBlue/80 z-9 duration-150 group-hover:opacity-100 opacity-0">
                                    </div>
                                    <h2 class="z-10 opacity-0 text-white fw-700 md:text-20px group-hover:opacity-100 duration-150 text-center px-20px">
                                        綠島豆丁海馬海底郵筒
                                    </h2>
                                    <img src="https://myttgo.cbsdinfo.com.tw/service/Upfile/20230407\404163136004101.jpg" alt="綠島豆丁海馬海底郵筒" class="absolute top-0 left-0 w-full h-full object-cover object-center">
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>

            <footer class="bg-cover w-full h-200px sm:h-250px md:h-280px bg-no-repeat bg-right flex items-end justify-between px-5% py-40px relative" style="background-image: url('http://taitungttgo.cbsdinfo.com.tw/images/footer/footer.png')">
                <h2 src="http://taitungttgo.cbsdinfo.com.tw/images/footer/footer-logo.svg" class="indent-101% overflow-hidden whitespace-nowrap bg-no-repeat h-50px w-220px bg-contain hidden md:block">
                    <a aria-current="page" class="block h-full" title="前往臺東交通預約媒合平台首頁">
                        臺東交通預約媒合平台
                    </a>
                </h2>
                <div class="absolute bottom-20px left-1/2 -translate-x-1/2 text-white w-full flex flex-col items-center gap-y-6px md:gap-y-10px text-12px md:text-14px">
                    <p>
                        TTGO 客服電話：
                        <a href="tel:089220855" target="_blank">
                            089-220-855
                        </a>
                    </p>
                    <div class="flex gap-2">
                        <a href="/privacy" class="block h-full" title="前往臺東交通預約媒合平台隱私權政策">
                            隱私權政策
                        </a>
                        <a href="/terms" class="block h-full" title="前往臺東交通預約媒合平台服務條款">
                            TTGO服務條款
                        </a>
                    </div>
                    <p>
                        Copyright©臺東縣政府 2023 TTGO臺東交通預約媒合平台
                    </p>
                </div>
            </footer>
        </main>
    </div>

    <div class="flex flex-1 w-100% h-100% bg-#000000/65% absolute top-0 z-31"></div> 

</template>


<style>
    .bullet {
        width:20px; height:20px; background-color: #e1e1e1; border-radius: 50%; margin:0 5px; 
    }
    a, div {
        pointer-events: none;
    }
</style>