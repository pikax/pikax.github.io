<template lang="pug">
  v-card.my-3(hover)
    v-card-media.white--text(height='170px', :src='image')
      v-container(fill-height, fluid)
        v-layout
          v-flex(xs12, align-end, d-flex)
            span.headline {{ title }}
    v-card-text
          p.subheading(v-if="from && to") {{from}} to {{to}}
          p {{ description }}
    v-card-actions
      v-btn(v-for="l in links"
      ,:key="l.src"
      ,:href="l.src"
      ,:class="l.className"
      ,icon
      )
        v-icon(medium) {{l.icon}}
      v-spacer
      v-btn.blue--text(flat, :href="website") Read More
</template>

<script>
  export default {
    name: "ProjectCard",



    props: {
      image: String,
      title: String,
      description: String,
      website: String,

      from: String,
      to: String,


      links: Array,
    }


  }
</script>

<style scoped>

</style>
