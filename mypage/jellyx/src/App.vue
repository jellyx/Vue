<template>
  <div id="app">
    <header>
      <p>zheshitou</p>
    </header>
    <div class="body">
      <div class="content">
        <img @click="changePic" :src="imgSrc">
        <router-view/>
      </div>
    </div>
    <footer>
      <p>zheshiwei</p>
    </footer>
  </div>
</template>

<script>
document.oncontextmenu = function(){
                event.returnValue = false;
            };
document.onmousedown = function(){
                if(event.button==2){
                    return event.button = 1 ;
                };
}              
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

header {
  height:30px;
  background-color:greenyellow;
}
footer {
  height:50px;
  background-color:plum;
}

.body {                /*双重嵌套实现上下固定中间滚动*/
  position:relative;   /*注意relative和position的应用*/
  flex:1;
  overflow: hidden;
}
.content {
  padding-top: 20px;
  padding-bottom: 20px;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow-y:auto;
}
</style>
