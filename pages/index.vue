<template lang="pug">
  div
    project-card(v-for='post in cards', :key='post.title'
    , :title="post.title"
    , :image="post.image"
    , :description="post.description"
    , :links="post.links"
    , :from="post.from"
    , :to="post.to"
    , :website="post.website"

    )
</template>

<script>
  import {mapGetters} from "vuex";
  import ProjectCard from "../components/ProjectCard";

  export default {
    name: 'pg-index',

    components: {ProjectCard},

    computed: {
      ...mapGetters(["cards"]),
    },


    head(){
      return {
        title: 'Home | ',
      }
    }
  }
</script>
