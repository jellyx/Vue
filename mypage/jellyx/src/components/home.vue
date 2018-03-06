<template>
  <div class="changePic">  
    <img @click="changePic" :src="imgSrc">
  </div>
  <!-- <div class="carousel">
    
  </div>
  <div class="linkBar">

  </div> -->
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      showPic:true
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

<style scoped>
  .changePic{
    margin-top: 1rem;
  }
</style>
