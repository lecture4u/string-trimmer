<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/logo.png">
    <Trimmer msg="Welcome to Trimmer App"/>
  </div>
</template>

<script>
import Trimmer from './components/Trimmer.vue'

export default {
  name: 'App',
  components: {
    Trimmer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 300px;
  height: auto;
}
</style>
