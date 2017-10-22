<template>

  <div>
    <p>{{chapter}}</p>
    <p>{{volume}}</p>
    <p>{{src}}</p>
    <p>{{name}}</p>
    <p>{{language}}</p>
    <p>{{scanlator}}</p>
    <p>{{dateAdded}}</p>
  </div>

</template>

<script>
  export default {
    name: "chapter-card",



    props:{
      chapter: {type:String, required:true},
      volume: String,
      src: {type:String, required:true}, //TODO probably remove
      name: String,
      language: String,
      scanlator: String,
      dateAdded: String
    }
  }
</script>

<style scoped>

</style>
