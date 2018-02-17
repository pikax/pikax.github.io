<template lang="pug">
  v-app(light)
    v-content
      v-container
        v-layout(row, wrap, align-center)
          v-flex(xs12, md4)
            info
          v-flex(xs12, md5, offset-md2)
            project-card(v-for='post in cards', :key='post.title'
              , :title="post.title"
              , :image="post.image"
              , :description="post.description"
              , :links="post.links"

            )
    v-footer.secondary(app)
      the-footer
</template>

<script>

  import {mapGetters} from "vuex";
  import ProjectCard from "../components/ProjectCard";
  import TheFooter from "../components/TheFooter";
  import Info from "../components/Info";

  export default {
    name: "default",
    components: {Info, TheFooter, ProjectCard},


    computed: {
      ...mapGetters(["cards"]),
    }

  }
</script>

<style scoped>

</style>
