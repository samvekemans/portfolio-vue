<template>
  <div class="p-7">
    <div class="border-border border-b-2 pb-2 hidden 700:block">
      <svg viewBox="0 0 100 80" class="w-12 h-12" @click="activateNav">
        <rect width="100" height="5"></rect>
        <rect y="30" width="100" height="5"></rect>
        <rect y="60" width="100" height="5"></rect>
      </svg>
    </div>
    <nav ref="nav" class="border-b-2 border-border pb-2 nav-disabled relative">
      <svg
        @click="disableNav"
        class="white absolute top-7 left-7 h-12 w-12 hidden 700:block"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enable-background="new 0 0 1000 1000"
        xml:space="preserve"
      >
        <metadata>
          Svg Vector Icons : http://www.onlinewebfonts.com/icon
        </metadata>
        <g>
          <g
            transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"
          >
            <path
              d="M279.7,4972.1c-148.7-72.2-220.9-297.5-144.4-450.6c19.7-39.4,1010.5-1047.7,2202.5-2239.7L4507.6,109.9L2326.9-2070.8C1097.7-3300,135.3-4279.9,122.2-4314.9C15-4605.8,316.8-4890.1,588-4754.5C627.4-4734.8,1635.7-3744,2827.8-2552L4999.7-382.2l2180.7-2180.7c1229.2-1229.2,2209.1-2191.6,2244.1-2204.7c159.7-59.1,321.5,0,424.3,150.9c54.7,80.9,65.6,199,28.4,301.8c-13.1,35-975.5,1014.9-2204.7,2244.1L5491.8,109.9l2180.7,2182.8c1229.2,1227,2191.6,2206.9,2204.7,2241.9c105,282.2-170.6,557.7-452.8,452.8c-35-13.1-1014.9-975.5-2241.9-2204.7L4999.7,602L2819,2782.7C1589.8,4011.9,609.9,4974.3,574.9,4987.4C485.3,5020.2,362.8,5013.6,279.7,4972.1z"
            />
          </g>
        </g>
      </svg>
      <ul class="flex justify-center gap-11 mb-2">
        <li class="navElement">
          <nuxt-link class="text-2xl px-1.5 py-1" to="/" exact>
            Home
          </nuxt-link>
        </li>
        <li class="navElement">
          <nuxt-link
            class="text-2xl px-1.5 py-1"
            :to="`/my-work`"
            :event="'/my-work' === $route.matched[0].path ? '' : 'click'"
          >
            Mijn Werk
          </nuxt-link>
        </li>
        <li class="navElement">
          <nuxt-link class="text-2xl px-1.5 py-1" to="/about-me">
            Over mij
          </nuxt-link>
        </li>
        <li class="navElement">
          <nuxt-link class="text-2xl px-1.5 py-1" to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    activateNav() {
      this.$refs.nav.classList.remove("nav-disabled");
      this.$refs.nav.classList.add("nav-active");
    },
    disableNav() {
      this.$refs.nav.classList.remove("nav-active");
      this.$refs.nav.classList.add("nav-disabled");
    },
  },
};
</script>

<style>
.navElement a:hover {
  font-weight: 500;
  border-bottom: #d97386 2px solid;
}
.navElement .nuxt-link-active {
  font-weight: 500;
  border-bottom: #d97386 2px solid;
}
svg {
  fill: #d97386;
}
svg.white {
  fill: white;
}
@media (max-width: 700px) {
  nav {
    transition: 0.7s;
  }
  ul {
    flex-direction: column;
    height: 100%;
  }
  .nav-active {
    transform: translateX(0%);
    position: absolute;
    background-color: #d97386;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999999;
    flex-direction: column;
    gap: 4em;
    padding-left: 28px;
  }
  .nav-disabled {
    transform: translateX(-200%);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999999;
    flex-direction: column;
    gap: 4em;
    background-color: #d97386;
  }
}
</style>
