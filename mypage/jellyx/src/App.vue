<template>
  <div id="app">
      <img @click="change" src="../static/image/timg.jpg" v-show="showPic">
      <img @click="change" src="../static/image/keke.jpg" v-show="!showPic">
    <router-view/>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'App',
  data: {
    showPic: true
  },
  methods: {
    change() {
      this.showPic = !this.showPic
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
}
</style>
