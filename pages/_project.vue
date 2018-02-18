<template lang="pug">
  vue-markdown(:source="description")
</template>

<script>
  import VueMarkdown from 'vue-markdown'

  export default {
    name: "_project",

    components: {
      VueMarkdown
    },


    head() {
      return {
        title: this.title + " | ",
        meta: [
          {hid: 'description', name: 'description', content: this.title}
        ]
      };
    },


    asyncData({params, env, error}) {
      const data = require("@/api/info").default;

      const projects = data.projects;

      const p = encodeURI(params.project);

      const project = projects[p];

      if (!project) {
        return error({message: 'Project not found', statusCode: 404})
      }

      return project
    },

  }
</script>

<style scoped>

</style>
