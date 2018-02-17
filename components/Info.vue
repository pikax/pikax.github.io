<template lang="pug">
  div.text-xs-center
    v-avatar(size='125px')
      img.img-circle.elevation-7.mb-1(:src='info.image')
    div.headline {{info.name}}
    .subheading.text-xs-center.grey--text.pt-1.pb-3 {{info.subtext}}
    v-layout(justify-space-between)
      v-btn(v-for='b in info.buttons', :key="b.title",
      flat, color='primary'
      , :href="b.src") {{b.title}}
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Info",


    computed: {
      ...mapGetters(["info"]),
    }
  }
</script>

<style scoped>

</style>
