<template>
  <nuxt-link :to="link" class="text-2xl button text-white px-4 py-2 rounded-lg">
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style>
.button {
  background: #1a4d8b;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.384);
}
</style>
