<template>
  <div class="relative">
    <header class="h-screen flex flex-col justify-between relative">
      <nav-component />

      <div
        class="flex items-center justify-between h-full bg-banner bg-contain bg-no-repeat bg-right 1000:bg-center 1000:bg-none 1000:m-0 my-14 mr-9 700:p-0 700:justify-center"
      >
        <div
          class="ml-9 bg-white rounded-xl px-7 pt-5 pb-7 shadow-2xl 1000:bg-none 1000:shadow-none 1000:flex 1000:flex-col 1000:items-center 700:m-0 700:p-0"
        >
          <img
            ref="img"
            src="/me.png"
            alt="Ik"
            class="w-96 1200:w-72 transitionImg 700:hidden"
          />
          <img
            src="/me-small.png"
            alt="Ik"
            class="hidden 700:block m-auto img"
          />
          <action title="Over mij →" link="/about-me" class="1000:hidden" />
          <img src="/banner.png" alt="" class="hidden 1000:block dontShow" />
        </div>
      </div>

      <div class="p-10">
        <div
          v-scroll-to="{ el: '#main', duration: 1000 }"
          class="text-3xl pt-7 text-center mt-8 cursor-pointer border-t-2 border-border"
        >
          <p class="font-semibold">Bekijk mijn werk</p>
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
      imgOffsetTop: "",
      navItems: [{ slug: "hello", img: "/" }],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.resize);
    this.imgOffsetTop =
      this.$refs.img?.offsetTop + this.$refs.img?.clientHeight / 2;
  },

  methods: {
    onScroll() {
      if (this.$refs.img) {
        if (window.scrollY >= this.imgOffsetTop) {
          this.$refs.img.classList.add("fixedImg");
        } else {
          this.$refs.img.classList.remove("fixedImg");
        }
      }
    },
    resize() {
      this.imgOffsetTop =
        this.$refs.img?.offsetTop + this.$refs.img?.clientHeight / 2;
    },
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

.fixedImg {
  position: fixed;
  top: 10px;
  z-index: 99;
  width: 175px;
}

.transitionImg {
  transition: 0.7s;
}
@media (max-width: 700px) {
  img.dontShow {
    display: none;
  }
  .img {
    max-height: 50vh;
    max-width: 80vw;
  }
}
</style>
