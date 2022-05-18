<template>
  <div class="relative">
    <header class="h-screen flex flex-col justify-between">
      <nav-component />

      <div class="h-full bg-contain bg-no-repeat bg-center mx-10 mb-20 mt-10" :style="{ 'background-image': `url(${banner})` }">
        
      </div>
         <div class="flex flex-row flex-wrap content-around gap-4 justify-center">
            <div
              v-for="navItem in navItems"
              :key="navItem.slug"
              class="flex justify-center w-40 h-28 bg-gray-100 shadow-md rounded navItem relative 700:w-28 700:h-24"
            >
                <nuxt-link
                  :to="`/my-work/${navItem.attributes.slug}`"
                  class="p-4 flex justify-center w-full rounded link aborder"
                >
                  <img
                    :src="`${$config.cmsUrl}${navItem.attributes.image.data.attributes.url}`"
                    alt=""
                    class="max-h-20 object-contain"
                  />
                </nuxt-link>
              </div>
      </div>

      <div class="p-10 pt-0">
        <div
          v-scroll-to="{ el: '#main', duration: 1000 }"
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
  data() {
    return {
      navItems: [],
    };
  },
  props: {
    banner: {
      type: String,
      default: "/banner.png",
    },
    title: {
      type: String,
      required: true,
    },
  },
  async fetch() {
    const data = await this.$axios.$get(`${this.$config.cmsUrl}/api/my-works`, {
      params: {
        populate: ["image"],
      },
    });
    this.navItems = data.data;
  },
};
</script>

<style>
.hello {
  background-image: url("/banner.png");
}
.arrow {
  top: -5px;
  animation: arrow 2.5s linear 0s infinite normal none running;
}
@keyframes arrow {
  0% {
    top: -5px;
    oppacity: 0.7;
  }
  25% {
    top: 2.5px;
    oppacity: 1;
  }
  50% {
    top: 10px;
    oppacity: 0.7;
  }
  75% {
    top: 2.5px;
    oppacity: 0.7;
  }
  100% {
    top: -5px;
    oppacity: 1;
  }
}

.navItem .nuxt-link-active{
    background-color: #D97386;
    width: 100%;
}
.navItem .aborder:hover{
    background-color: #D97386;
    width: 100%;
}



.aborder:hover::after {
  content: "";
  bottom: 100%;
  left: 0px;
  right: 0px;
  margin: auto;
  height: 0px;
  width: 0px;
  position: absolute;
  border-style: solid;
  border-image: initial;
  border-color:rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) #d97386 ;
  border-width: 10px;
}



.link.nuxt-link-active::after {
  content: "";
  bottom: 100%;
  left: 0px;
  right: 0px;
  margin: auto;
  height: 0px;
  width: 0px;
  position: absolute;
  border-style: solid;
  border-image: initial;
  border-color:rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) #d97386 ;
  border-width: 10px;
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
