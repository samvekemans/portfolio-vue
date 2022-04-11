<template>
  <div class="relative">
      <header class="h-screen flex flex-col justify-between">
            
        <nav-component />

            <div class="flex flex-col items-center h-full justify-evenly">
                <h1 class="text-6xl font-write 700:hidden">{{title}}</h1>
                <img :src="banner" alt="" class="max-w-2xl img">
            </div>

            <div class="p-10 ">
                <div 
                    v-scroll-to="{el: '#main', duration: 1000 }" 
                    class="text-3xl pt-7 text-center mt-8 cursor-pointer border-t-2 border-border"
                >
                    <p class="font-semibold">Bekijk het project</p>
                    <p class="arrow relative">↓</p>
                </div>
            </div>
      </header>
  </div>
</template>

<script>
export default {
    props: {
        banner: {
            type: String,
            default: '/banner.png'
        },
        title: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>
.hello {
    background-image: url('/banner.png');
}
.arrow{
    top: -5px;
    animation: arrow 2.5s linear 0s infinite normal none running;
}
@keyframes arrow {
    0%   {top: -5px; oppacity:0.7;}
    25%  {top: 2.5px; oppacity: 1;}
    50%  {top: 10px; oppacity:0.7;}
    75%  {top: 2.5px; oppacity:0.7;}
    100% {top: -5px; oppacity: 1;}
}

/* .navElement{
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    transition: .3s;
}
.navElement:hover{
    border-bottom: #D97386 2px solid;
}
.navElement:hover>a{
    font-weight: 500;
} */
</style> 