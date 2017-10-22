<template>
  <div>

    <manga-info :title="manga.title" v-if="!!manga && !error && !loading" v-bind="manga"></manga-info>
    <div v-if="error">
      ERROR: error
    </div>

    <md-spinner :md-indeterminate="loading" v-if="loading"></md-spinner>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  import MangaInfo from "./MangaInfo";

  export default {
    components: {MangaInfo},
    name: "ginmanga-info",

    data: () => ({
      info: null,
      loading: null,
    }),

    computed: {
      ...mapGetters({
        getManga: 'getMangaByTitle',
        error: "mangaError"
      }),

      manga: function () {
        const {title} = this;
        const info = this.getManga(title);

        if (!info) {
          console.log("getting info")
          this.loading = true;
          this.getMangaInfo({title});
          return null;
        }

        this.loading = false;

        return info;
      }
    },


    methods: {
      ...mapActions([
        'getMangaInfo'
      ]),
    },

    props: {
      title: {
        type: String,
        required: true,
      }
    },


    watch: {
      title: function (value, prev) {
        console.log(`new: ${value} | prev: ${prev}`)


      }
    }

  }
</script>

<style scoped>

</style>
