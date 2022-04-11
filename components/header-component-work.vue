<template>
  <div class="relative">
    <header class="h-screen flex flex-col justify-between">
      <nav-component />
      <div class="flex flex-col h-full">
        <div class="flex justify-center gap-4">
          <div
            v-for="navItem in navItems"
            :key="navItem.slug"
            class="flex justify-center w-40 bg-gray-100 shadow-md rounded navItem relative"
          >
            <nuxt-link
              :to="`/my-work/${navItem.attributes.slug}`"
              class="p-4 flex justify-center w-full rounded link aborder"
            >
              <img
                :src="`http://localhost:1337${navItem.attributes.image.data.attributes.url}`"
                alt=""
                class="max-h-20"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="flex flex-col items-center h-full justify-center">
          <img :src="banner" alt="" class="max-h-80 pt-2" />
          <h1 class="text-3xl font-write pt-9 700:hidden">{{ title }}</h1>
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
    const data = await this.$axios.$get("http://localhost:1337/api/my-works", {
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

/* .navItem .nuxt-link-active{
    background-color: #D97386;
    width: 100%;
} */

.aborder:hover::before {
  position: absolute;
  content: "";
  inset: 0px;
  right: 0px;
  border: 5px solid #d97386;
  border-radius: 0.25em;
}

.aborder:hover::after {
  content: "";
  top: 100%;
  left: 0px;
  right: 0px;
  margin: auto;
  height: 0px;
  width: 0px;
  position: absolute;
  border-style: solid;
  border-image: initial;
  border-color: #d97386 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  border-width: 10px;
}

.link.nuxt-link-active::before {
  position: absolute;
  content: "";
  inset: 0px;
  right: 0px;
  border: 5px solid #d97386;
  border-radius: 0.25em;
}

.link.nuxt-link-active::after {
  content: "";
  top: 100%;
  left: 0px;
  right: 0px;
  margin: auto;
  height: 0px;
  width: 0px;
  position: absolute;
  border-style: solid;
  border-image: initial;
  border-color: #d97386 rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
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
