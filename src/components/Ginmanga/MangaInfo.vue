<template>
  <md-layout md-column md-gutter>


    <md-layout md-row md-flex="100">
      <md-layout>
        <md-avatar class="md-large">
          <img id="img" :src="image" :alt="title" @click="onImageClick">
        </md-avatar>

        <md-layout md-column>
          <md-layout md-row>
            <md-layout><h2>{{title}}</h2></md-layout>

            <md-chip v-for="t in synonyms"
                     md-static
                     :class="{'md-primary': t.language == Languages.English,
                        'md-secondary': t.language == Languages.Japanese}"
                     :key="t.title">
              <span :title="t.title">{{t.title}}</span>
            </md-chip>
          </md-layout>


        </md-layout>


      </md-layout>
    </md-layout>

    <md-layout md-column-xlarge>
        <label class="md-caption">Genres</label>
        <md-chips v-model="genres" md-static class="no-padding-chips"></md-chips>
    </md-layout>

    <md-layout md-column-small>
      <md-layout md-flex-small="100"
                 md-flex-large="10">
        <md-input-container>
          <label>Author</label>
          <md-input v-model="authors" readonly></md-input>
        </md-input-container>

      </md-layout>

      <md-layout md-flex-small="100"
                 md-flex-large="10"
      >
        <md-input-container>
          <label>Artist</label>
          <md-input v-model="artists" readonly></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>

    <md-layout md-column md-flex="100">
      <label class="md-caption">Synopsis</label>
      <label class="md-body">{{synopsis}}</label>
    </md-layout>

    <md-layout>
      <md-layout md-align="center">

        <md-layout md-flex="100">
          <!--LANGUAGE selector-->
          <md-input-container md-inline>
            <label>Language</label>
            <md-select name="lang" id="lang" v-model="language">
              <md-option v-for="l in chapterLanguages"
                         :key="l"
                         :value="l">{{l}}
              </md-option>
            </md-select>

          </md-input-container>
        </md-layout>

        <!--CHAPTER TABLE-->
        <md-table-card>
          <md-table md-sort="chap_number">
            <md-table-header v-once>
              <md-table-row>
                <md-table-head md-sort-by="chap_number" md-numeric>Chapter</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head class="extra-cols" md-sort-by="volume" md-numeric>Volume</md-table-head>
                <md-table-head class="extra-cols">Language</md-table-head>
                <md-table-head class="extra-cols">Scanlator</md-table-head>
                <md-table-head>Src</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row v-for="(row, index) in chaptersByLanguage" :key="index">
                <md-table-cell key="chap_number">{{row.chap_number}}</md-table-cell>
                <md-table-cell key="name">{{row.name}}</md-table-cell>
                <md-table-cell key="volume" class="extra-cols">{{row.volume}}</md-table-cell>
                <md-table-cell key="language" class="extra-cols">{{row.language}}</md-table-cell>
                <md-table-cell key="scanlator" class="extra-cols">{{row.scanlator}}</md-table-cell>
                <md-table-cell key="src">
                  <a :href="row.src" target="_blank">Batoto Chapter</a>
                </md-table-cell>
              </md-table-row>
            </md-table-body>

          </md-table>
        </md-table-card>
      </md-layout>

    </md-layout>


    <md-dialog md-open-from="#img" md-close-to="#img" ref="imageDialog">
      <md-dialog-content>
        <md-image :md-src="image"></md-image>
      </md-dialog-content>
    </md-dialog>

  </md-layout>
</template>

<script lang="ts">
  import ChapterCard from "./ChapterCard.vue";

  import {uniq, sortBy} from 'lodash';

  const enum Languages {
    English = "English",
    Japanese = "Japanese"
  }


  export default {
    components: {
      ChapterCard
    },
    name: "manga-info",


    computed: {
      Languages: () => {
        return {
          English: "English",
          Japanese: "Japanese"
        }
      },
      chapterLanguages() {
        return uniq((this as any).chapters.map(x => x.language));
      },


      chaptersByLanguage() {
        const {chapters, language} = this as any;

        return chapters.filter(x => x.language === language)
      }


    },


    methods: {
      onImageClick() {
        console.log('opening img');
        (this as any).$refs.imageDialog.open()
      }
    },


    data: () => ({
      language: "English",
      // sorter: {name:"chapter_number", type:"desc"}
    }),

    props: {
      title: {
        type: String,
        required: true
      },
      artists: {
        type: Array,
      },
      authors: {},
      chapters: {},
      genres: {},
      image: {},
      mature: {},
      status: {},
      synonyms: {},
      synopsis: {},
      type: {},
    },


    created() {
      console.log(`created with ${(this as any).title}`)
    }

  }
</script>

<style lang="scss" scoped>
  $break-small: 620px;

  .extra-cols {
    /*display: block;*/

    @media only screen and (max-width: $break-small) and (orientation: portrait) {
      display: none;
    }
  }

  .no-padding-chips{
    padding: 0px;
  }

</style>
