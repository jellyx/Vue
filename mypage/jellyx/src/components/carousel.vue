<template>
  <div class="carousel" v-if="list.length!=0">
    <WaterFall :list="list"></WaterFall>
  </div>
</template>

<script>
  import WaterFall from './waterfall.vue'
  export default {
    data() {
      return {
        list: [],
        flag:false
      }
    },
    created() {
      window.onscroll = () => {
        if (this.flag) {
          return
        }
        if (document.documentElement.scrollTop + document.body.clientHeight + 1000 > document.documentElement.scrollHeight) {
          this.flag = true
          this.list = this.list.concat([
            {url:'../../static/img/gakki/gakki2.jpg', height:1200, width:794},      //正常情况下应从后端获取图片及其尺寸信息
            {url:'../../static/img/gakki/gakki5.jpg', height:591, width:500},
            {url:'../../static/img/gakki/gakki8.jpg', height:880, width:600},
            {url:'../../static/img/gakki/gakki12.jpg', height:1132, width:800},
            {url:'../../static/img/gakki/gakki9.jpg', height:810, width:539},
            {url:'../../static/img/gakki/gakki3.jpg', height:1093, width:675},
            {url:'../../static/img/gakki/gakki1.jpg', height:632, width:500},
            {url:'../../static/img/gakki/gakki7.jpg', height:800, width:643},
            {url:'../../static/img/gakki/gakki4.jpg', height:1170, width:936},
            {url:'../../static/img/gakki/gakki6.jpg', height:750, width:500},
            {url:'../../static/img/gakki/gakki10.jpg', height:416, width:540},
            {url:'../../static/img/gakki/gakki11.jpg', height:800, width:600}
          ])
          setTimeout(() => {
            this.flag = false
          },500)
        }
      }
    },
    mounted() {
      this.list = [
            {url:'../../static/img/gakki/gakki9.jpg', height:810, width:539},       //正常情况下应从后端获取图片及其尺寸信息
            {url:'../../static/img/gakki/gakki2.jpg', height:1200, width:794},
            {url:'../../static/img/gakki/gakki8.jpg', height:880, width:600},
            {url:'../../static/img/gakki/gakki10.jpg', height:416, width:540},
            {url:'../../static/img/gakki/gakki4.jpg', height:1170, width:936},
            {url:'../../static/img/gakki/gakki12.jpg', height:1132, width:800},
            {url:'../../static/img/gakki/gakki7.jpg', height:800, width:643},
            {url:'../../static/img/gakki/gakki3.jpg', height:1093, width:675},
            {url:'../../static/img/gakki/gakki11.jpg', height:800, width:600},
            {url:'../../static/img/gakki/gakki5.jpg', height:591, width:500},
            {url:'../../static/img/gakki/gakki1.jpg', height:632, width:500},
            {url:'../../static/img/gakki/gakki6.jpg', height:750, width:500},
            {url:'../../static/img/gakki/gakki9.jpg', height:810, width:539},
            {url:'../../static/img/gakki/gakki2.jpg', height:1200, width:794},
            {url:'../../static/img/gakki/gakki8.jpg', height:880, width:600},
            {url:'../../static/img/gakki/gakki10.jpg', height:416, width:540},
            {url:'../../static/img/gakki/gakki4.jpg', height:1170, width:936},
            {url:'../../static/img/gakki/gakki12.jpg', height:1132, width:800},
            {url:'../../static/img/gakki/gakki7.jpg', height:800, width:643},
            {url:'../../static/img/gakki/gakki3.jpg', height:1093, width:675},
            {url:'../../static/img/gakki/gakki11.jpg', height:800, width:600},
            {url:'../../static/img/gakki/gakki5.jpg', height:591, width:500},
            {url:'../../static/img/gakki/gakki1.jpg', height:632, width:500},
            {url:'../../static/img/gakki/gakki6.jpg', height:750, width:500},
            {url:'../../static/img/gakki/gakki9.jpg', height:810, width:539},
            {url:'../../static/img/gakki/gakki2.jpg', height:1200, width:794},
            {url:'../../static/img/gakki/gakki8.jpg', height:880, width:600},
            {url:'../../static/img/gakki/gakki10.jpg', height:416, width:540},
            {url:'../../static/img/gakki/gakki4.jpg', height:1170, width:936},
            {url:'../../static/img/gakki/gakki12.jpg', height:1132, width:800},
            {url:'../../static/img/gakki/gakki7.jpg', height:800, width:643},
            {url:'../../static/img/gakki/gakki3.jpg', height:1093, width:675},
            {url:'../../static/img/gakki/gakki11.jpg', height:800, width:600},
            {url:'../../static/img/gakki/gakki5.jpg', height:591, width:500},
            {url:'../../static/img/gakki/gakki1.jpg', height:632, width:500},
            {url:'../../static/img/gakki/gakki6.jpg', height:750, width:500}
      ]
    },
    components: {
      WaterFall
    }
  }
</script>

<style scoped>
  .carousel{
    padding: 1rem 0;
    text-align: center;
  }
  
</style>
