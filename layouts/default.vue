<template lang="pug">
  v-app(light)
    v-content
      v-container
        v-layout(row, wrap, align-center)
          v-flex(xs12, md4)
            info
          v-flex(xs12, md5, offset-md2)
            nuxt
    v-footer.secondary(app)
      the-footer
</template>

<script>
  import TheFooter from "../components/TheFooter";
  import Info from "../components/Info";

  export default {
    name: "default",
    components: {Info, TheFooter},



  }
</script>

<style scoped>

</style>
