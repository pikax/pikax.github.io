import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld.vue'
import About from 'src/components/About.vue'
import Project from 'src/components/Project.vue'
import Home from 'src/components/Home.vue'
import Ginmanga from 'src/components/Ginmanga.vue'
import GinmangaInfo from 'src/components/Ginmanga/GinmangaInfo.vue'


Vue.use(Router)



export const routes: {name, path, component, props?, visible?}[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/ginmanga',
    name: 'GinManga',
    component: Ginmanga
  },
  {
    path: "/ginmanga/:title",
    name: "Manga",
    component: GinmangaInfo,
    props: true,
    visible: false

  }

];



export default new Router({
  routes
})
