<template>
  <div class="box">
    <div class="changePic">  
      <span><img @click="changePic" :src="imgSrc"></span>
      <p>点击图片切换</p>
    </div>
    <div class="carousel">
      <Carousel :list="list" :inv="invTime"></Carousel>
    </div>
    <div class="cube">
		  <Cube></Cube>
    </div>
  </div>
</template>

<script>
import Carousel from './carousel'
import Cube from './cube'
export default {
  name: 'home',
  data () {
    return {
      invTime: 2000,
      showPic:true,
      list:[
        {
          src:('../../static/img/keke/keke1.jpg'),
          title:'1', 
        },
        {
          src:('../../static/img/keke/keke2.jpg'),
          title:'2', 
        },
        {
          src:('../../static/img/keke/keke3.jpg'),
          title:'3', 
        },
        {
          src:('../../static/img/keke/keke4.jpg'),
          title:'4', 
        },
        {
          src:('../../static/img/keke/keke5.jpg'),
          title:'5', 
        },
        {
          src:('../../static/img/keke/keke6.jpg'),
          title:'6', 
        }
      ]
    }
  },
  methods: {
    changePic() {
      this.showPic = !this.showPic
    }
  },
  computed: {
      imgSrc() {
          return this.showPic ? '../static/img/heihei.jpg' : '../static/img/timg.jpg'
      }
  },
  components:{
    Carousel,
    Cube
  }
}
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 2rem;
}

.changePic{
  flex: 1;
  height: 100%;
  padding-top: 3rem;
}

.changePic img{
  width: 50%;
}

.box p{
  color: pink;
  font-size: 2rem;
}

.carousel{
  flex: 1;
  padding-top: 2rem;
}

.cube{
  flex: 1;
}

</style>
