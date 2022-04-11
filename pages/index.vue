<template>
  <div>
    <header-component />

    <main
      id="main"
      class="bg-mainbg bg-no-repeat bg-center bg-cover bg-fixed relative pb-16"
    >
      <div class="absolute h-24 bg-gradient-to-b from-white w-full"></div>
      <div class="max-w-6xl m-auto pt-16 pb-16">
        <div class="p-always flex flex-col gap-10">
          <div
            v-for="item in items"
            :key="item.title"
            class="flex justify-between items-start work bg-white rounded shadow p-7 700:flex-col 700:gap-3 700:m-auto 700:items-center"
          >
            <article class="700:flex 700:flex-col 700:items-center">
              <h3 class="text-5xl font-write 1000:text-4xl">
                {{ item.attributes.name }}
              </h3>
              <p class="mb-4 mt-1 text-xl 1000:text-lg 700:mb-0">
                {{ item.attributes.description }}
              </p>
              <nuxt-link
                :to="`/my-work/${item.attributes.slug}`"
                class="text-3xl 1000:text-2xl 700:hidden"
              >
                Bekijk meer →
              </nuxt-link>
            </article>
            <img
              :src="`http://localhost:1337${item.attributes.image.data.attributes.url}`"
              alt=""
              class="max-h-44 1000:w-72"
            />
            <nuxt-link
              :to="`/my-work/${item.attributes.slug}`"
              class="text-2xl hidden 700:block"
            >
              Bekijk meer →
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import headerComponent from "../components/header-component.vue";
export default {
  components: { headerComponent },
  name: "IndexPage",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    const data = await this.$axios.$get("http://localhost:1337/api/my-works", {
      params: {
        populate: ["image"],
      },
    });
    this.items = data.data;
  },
};
</script>

<style>
.work:nth-child(even) > article {
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.bg {
  background-color: white;
}
</style>
