<template>
  <div id="app">
      <img @click="changePic" :src="imgSrc">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showPic: true
    }
  },
  methods: {
    changePic() {
      this.showPic = !this.showPic
    }
  },
  computed: {
      imgSrc() {
          return this.showPic ? '../static/img/keke.jpg' : '../static/img/timg.jpg'
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
