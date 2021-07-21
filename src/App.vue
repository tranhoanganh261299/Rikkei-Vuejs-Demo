<template>
  <div id="app">
    <div class="container-bg">
      <profile/>
    </div>
    
  </div>
</template>

<script>
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    Profile
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
    height: 100vh;
}
.container-bg{
  height: 100vh;
  display: flex;
  background-image: url('./images/background.jpg');
  -webkit-background-size: cover;
   -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  align-items: center;
}
form{
  background: none;
}
</style>
