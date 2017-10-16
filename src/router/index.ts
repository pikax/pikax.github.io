import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld.vue'
import About from 'src/components/About.vue'
import Project from 'src/components/Project.vue'
import Home from 'src/components/Home.vue'

Vue.use(Router)



export const routes: {name, path, component}[] = [
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
  }
];



export default new Router({
  routes
})
