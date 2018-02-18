<template lang="pug">
  v-layout
    v-flex
      blockquote.text-xs-center.blockquote &#8220;{{quote.text}}.&#8221;
        footer
          small
            em &mdash;{{quote.author}}

      vue-markdown(:source="about")

</template>


<script>

  import {mapGetters} from 'vuex'
  import VueMarkdown from 'vue-markdown'


  export default {
    name: "pg-about",

    components: {
      VueMarkdown
    },

    fetch({store}) {
      return store.dispatch('generateRandomQuote')
    },

    computed: {
      ...mapGetters(["quote", "about"]),
    },


  }

</script>
