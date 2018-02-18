<template lang="pug">
  v-card.my-3(hover)
    v-card-media.white--text(height='170px', :src='image')
      v-container(fill-height, fluid)
        v-layout
          v-flex(xs12, align-end, d-flex)
            span.headline.text-shadow-subject {{ title }}
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

  .text-shadow-subject{
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px, rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px, rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px, rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px, rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px, rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px, rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px, rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px, rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838247px 0px;
  }

</style>
