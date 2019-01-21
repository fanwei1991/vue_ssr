<template>
  <div id="app">
    <img @mouseenter="handleClick" class="logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'vue_ssr_fw'
  },
  name: 'App',
  methods: {
    handleClick () {
      alert('来啦，老弟~~~~')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .logo {
    cursor: pointer;
  }
}
</style>
