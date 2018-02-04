<template lang="pug">

  v-app#inspire(dark='')

    //drawer
    v-navigation-drawer(:fixed='fixed', :clipped='clipped', temporary, v-model='drawer', app)
      v-list(dense='')
        v-list-tile(v-for='item in items', :key='item.text', @click='onNav(item)')
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title
              | {{ item.text }}
        v-subheader.mt-3.grey--text.text--darken-1 SUBSCRIPTIONS
        v-list
          v-list-tile(v-for='item in items2', :key='item.text', avatar='', @click='')
            v-list-tile-avatar
              img(:src='`https://randomuser.me/api/portraits/men/${item.picture}.jpg`', alt='')
            v-list-tile-title(v-text='item.text')
        v-list-tile.mt-3(@click='')
          v-list-tile-action
            v-icon(color='grey darken-1') add_circle_outline
          v-list-tile-title.grey--text.text--darken-1 Browse Channels
        v-list-tile(@click='')
          v-list-tile-action
            v-icon(color='grey darken-1') settings
          v-list-tile-title.grey--text.text--darken-1 Manage Subscriptions


    //toolbar
    v-toolbar(color='red', dense='', fixed='', clipped-left='', app='')
      v-toolbar-title.ml-0.pl-3(style='width: 300px')
        v-toolbar-side-icon(@click.stop='drawer = !drawer')
        v-icon.ml-3 fa-youtube
      v-layout(row='', align-center='', style='max-width: 650px')
        v-text-field.white--text(placeholder='Search...', single-line='', append-icon='search', :append-icon-cb='() => {}', hide-details='')

    //content
    v-content
      v-container(fill-height='')
        v-layout( )
          router-view
        //
          v-tooltip(right='')
            v-btn(icon='', large='', :href='source', target='_blank', slot='activator')
              v-icon(large='') code
            span Source


</template>

<script language="ts">
  /*
  *   <!--<div id="app">-->
  <!--<navbar :links="routes"/>-->

  <!--<router-view/>-->


  <!--</div>-->
*/
  import Navbar from "./components/Navbar";


  export default {
    components: {Navbar},
    name: 'app',

    data: function () {
      return {
        drawer: false,
        clipped: true,
        fixed: false,
        items: [
          {icon: 'book', text: "Mangas", nav: '/ginmanga'},
          {icon: 'trending_up', text: 'Most Popular'},
          {icon: 'subscriptions', text: 'Subscriptions'},
          {icon: 'history', text: 'History'},
          {icon: 'featured_play_list', text: 'Playlists'},
          {icon: 'watch_later', text: 'Watch Later'},
          {icon: 'refresh', text: 'Refresh user', nav: () => this.$store.dispatch("refreshUser")},
          {icon: 'refresh', text: 'Refresh manga', nav: ()=>(this).$store.dispatch('getAllMangas')},

        ],
        items2: [
          // { picture: 28, text: 'Joseph' },
          // { picture: 38, text: 'Apple' },
          // { picture: 48, text: 'Xbox Ahoy' },
          // { picture: 58, text: 'Nokia' },
          // { picture: 78, text: 'MKBHD' }

        ]
      }
    },

    props: ["routes"],


    computed:{



    },

    methods: {


      onNav({nav}) {

        if (typeof nav === 'string') {
          return this.$router.push(nav);
        }

        nav();
      },

      methods: {
        handleWindowResize(event) {
          const windowWidth = event.currentTarget.innerWidth;
          if (windowWidth < 500) {

            return this.drawer = false;
          }
          if (windowWidth > 1200) {
            return this.drawer = true;
          }

        },
      },

    },


    beforeMount() {
      // this.$store.dispatch("refreshUser");

      window.addEventListener('resize', this.handleWindowResize);
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleWindowResize)
    },

  }
</script>

<style lang="scss">
  .input-group__details:after {
    background-color: rgba(255, 255, 255, 0.32) !important;
  }

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 20px;*/
  /*}*/
</style>
