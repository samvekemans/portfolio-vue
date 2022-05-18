<template>
  <NuxtChild :key="$route.fullPath" />
</template>

<script>
export default {
  async mounted() {
    if (!this.$route.params.work) {
      const routeData = await this.$axios.$get(
        `${this.$config.cmsUrl}/api/my-works`
      );
      this.$router.push("/my-work/" + routeData.data[0].attributes.slug);
    }
  },
};
</script>
<style></style>
