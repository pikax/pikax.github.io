<template>
  <div id="app">
    <navbar :links="routes"/>

    <router-view/>


  </div>
</template>

<script language="ts">
import Navbar from "./components/Navbar";



export default {
  components: {Navbar},
  name: 'app',


  props:["routes"]

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
