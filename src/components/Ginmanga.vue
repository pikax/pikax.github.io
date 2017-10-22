<template>
  <div style="flex: 1;">

    <md-select v-model="visibleCount">
      <md-option v-for="(row, index) in mangasCount" :key="index"
                 :value="index">{{index}}</md-option>
    </md-select>

    <manga-card v-for="m in visible" :key="m.title"
                @click.native="openManga(m)"
                class="md-card"
                :title="m.title"
                :image="m.image"
                :alt="m.title">

      <md-card-actions slot="actions">
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>

    </manga-card>

    <ginmanga-info :title="selectedManga" v-if="!!selectedManga" />

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import MangaCard from "./Ginmanga/MangaCard";
  import MangaInfo from "./Ginmanga/MangaInfo";
  import GinmangaInfo from "./Ginmanga/GinmangaInfo";

  export default {
    name: "ginmanga",

    data:()=>({
      selectedManga:'',

      visibleCount: 3,
    }),

    components: {
      GinmangaInfo,
      MangaInfo,
      MangaCard},

    computed: {
      ...mapGetters({
                   mangas: 'allMangas'
                 }),

      mangasCount: function(){
        return this.mangas.length;
      },

      visible:function(){
        return this.mangas.slice(0, this.visibleCount)
      }
    },

    methods: {
      ...mapActions([
        'addToCart'
      ]),
      openManga({title}) {
        this.selectedManga = title;

      }
    },





    created() {
      (this).$store.dispatch('getAllMangas')
    },

  }


</script>

<style lang="scss" scoped>
  $break-small: 620px;

  .md-card {
    width: 100%;
    max-width: 240px;
    margin: 0 4px 16px;
    display: inline-block;
    vertical-align: top;

    @media screen and (max-width: $break-small) {
      width: 200px;
      float: none;
      background: red;

    }

    @media screen and (min-width: $break-small) {
      opacity: .9;

      &:hover {
        opacity: 1;
      }

    }

  }
</style>


