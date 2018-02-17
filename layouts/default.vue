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
    data: function () {
      return {
        name: "Carlos Rodrigues",
        subtext: "Fullstack developer",
        image: 'https://s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200',

        href: {
          github: "//github.com/pikax",
        },


        buttons: [
          {src: "/", title: "home"},
          {src: "/about", title: "about"},
          {src: "//github.com/pikax", title: "github"},
          {src: "//linkedin.com/in/carlosdcrodrigues", title: "linkedin"},
        ],

        posts: [
          {
            title: 'Iplicit',
            imgUrl: 'https://s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200',
            content: 'm'
          },
          {
            title: 'Swogh API',
            imgUrl: 'https://s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200',
            content: 'artaijhgsd'
          },
          {
            title: 'Gin-downloader',
            imgUrl: 'https://s.gravatar.com/avatar/1a99b582c69b5b5c7eced1e0dc47b694?s=200',
            content: 'artaijhgsd'
          },

        ]


      }
    },


    computed: {
      ...mapGetters(["cards"]),
    }

  }
</script>

<style scoped>

</style>
