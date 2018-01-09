<template>
  <md-card md-with-hover class="card focused" tabindex="-1" md-with-focus >
    <md-card-media-cover md-solid md-text-scrim>
      <md-card-media md-ratio="1:1">
        <img :src="image" :alt="alt">
        <md-ink-ripple></md-ink-ripple>
      </md-card-media>


      <md-card-area>
        <md-card-header>
          <div class="md-subhead">{{title}}</div>
        </md-card-header>


          <slot name="actions"></slot>
      </md-card-area>
    </md-card-media-cover>

  </md-card>

</template>

<script>
  export default {
    name: "manga-card",

    props: {
      title: {type:String, required:true},
      image: String,
      alt: String,
      subtitle: String,

      mature: Boolean,

      actions:{default: true}
    },

    data: () => ({
    }),


  }
</script>

<style lang="scss" scoped>


  .focused:focus{
    border: red;
  }

</style>
