<template>
  <md-layout md-gutter>

    <md-dialog md-open-from="#img" md-close-to="#img" ref="imageDialog">
      <!--<md-dialog-title>{{title}}</md-dialog-title>-->

      <md-dialog-content><md-image :md-src="image"></md-image></md-dialog-content>

      <!--<md-dialog-actions>-->
        <!--<md-button class="md-primary" @click="closeDialog('dialog1')">Cancel</md-button>-->
        <!--<md-button class="md-primary" @click="closeDialog('dialog1')">Ok</md-button>-->
      <!--</md-dialog-actions>-->
    </md-dialog>



    <md-layout md-row md-flex="100">
      <md-layout md-row>
        <md-avatar class="md-large" >
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

          <md-layout md-row>

          </md-layout>


        </md-layout>


      </md-layout>


    </md-layout>


    <md-layout>

    </md-layout>

    <md-chips v-model="artists" md-static></md-chips>
    <md-chips v-model="authors" md-static></md-chips>
    <md-chips v-model="genres" md-static></md-chips>


    <p>{{mature}}</p>
    <p>{{status}}</p>
    <p>{{synopsis}}</p>
    <p>{{type}}</p>


    <br/>
    <div class="field-group">
      <md-input-container>
        <!--<label>{{language}}</label>-->

        <md-select name="lang" id="lang" v-model="language" >
          <!--<md-button class="md-icon-button" md-menu-trigger slot="icon">-->
          <!--<md-icon>language</md-icon>-->
          <!--</md-button>-->
          <md-option v-for="l in chapterLanguages"
                     :key="l"
                     :value="l">
            {{l}}
          </md-option>
        </md-select>

      </md-input-container>
    </div>



    <!--<p>{{chapterLanguages}}</p>-->

    <!--<p>{{chaptersByLanguage}}</p>-->


    <div>
      <!--<chapter-card v-for="c in chaptersByLanguage" :key="c.chap_number"-->
                    <!--:chapter="c.chap_number"-->
                    <!--:volume="c.volume"-->
                    <!--:src="c.src"-->
                    <!--:name="c.name"-->
                    <!--:language="c.language"-->
                    <!--:scanlator="c.scanlator"-->
                    <!--:dateAdded="c.dateAdded"-->
      <!--&gt;-->
      <!--</chapter-card>-->

      <md-table-card>
      <md-table md-sort="chap_number" >
        <md-table-header v-once>
          <md-table-row>
            <md-table-head md-sort-by="chap_number" md-numeric>Chapter</md-table-head>
            <md-table-head >Name</md-table-head>
            <md-table-head md-sort-by="volume" md-numeric>Volume</md-table-head>
            <md-table-head >Language</md-table-head>
            <md-table-head >Scanlator</md-table-head>
            <md-table-head >Src</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="(row, index) in chaptersByLanguage" :key="index">
            <md-table-cell key="chap_number" >{{row.chap_number}}</md-table-cell>
            <md-table-cell key="name" >{{row.name}}</md-table-cell>
            <md-table-cell key="volume" >{{row.volume}}</md-table-cell>
            <md-table-cell key="language" >{{row.language}}</md-table-cell>
            <md-table-cell key="scanlator" >{{row.scanlator}}</md-table-cell>
            <md-table-cell key="src" >
              <a :href="row.src" target="_blank">Batoto Chapter</a>
            </md-table-cell>
          </md-table-row>
        </md-table-body>

      </md-table>
      </md-table-card>
    </div>

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
      ChapterCard},
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


    methods:{
      onImageClick(){
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

<style scoped>

</style>
