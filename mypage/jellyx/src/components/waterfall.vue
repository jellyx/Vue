<template>
  <div :class="{'waterFall':true}" ref="container">
    <div v-for="(item,index) of list" :key="index" class="column">
      <img :src="item.url" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list:{   
        type: Array,       
        required: true   // 必须提供字段
      },
      column:{
        type: Number,
        default: 4     // 可选字段，有默认值
      }
    },
    data() {
      return {
        itemWidth: 0,
        columnData: []
      }
    },
    watch: {
      list(val) {         //es6 等于 list:function(val)
        this.renderList()
      }
    },
    mounted() {
      this.renderList()
    },
    methods:{
      renderList(){      //es6 等于 renderList:function()
        this.columnData=[]
        this.itemWidth=`${100 / this.column}%` //$()是es6的模板占位符
        this.$nextTick(() => {
          const boxes = this.$refs.container.getElementsByClassName('column')
          for(let i=0; i<boxes.length; i++){
            this.setElementStyle(boxes[i],this.list[i],i)
          }
        })
      },
      setElementStyle(element, img, index){  //计算图片在网页中实际高度
        const picWidth = this.$refs.container.offsetWidth / this.column
        const picHeight = ((picWidth - 6) / img.width) * img.height + 6    //因为padding=3，所以+6
        if (index<this.column){
          element.style.left = `${index * (100/this.column)}%` //index从0开始
          this.columnData[index] = this.columnData[index] ? this.columnData[index] + picHeight : picHeight
        }
        else{              //找出每行最短的列
          let min={}
          for(let i=0; i<this.columnData.length; i++){
            if (!min.hasOwnProperty('index')) {
              min = {index:i, value:this.columnData[i]}
            }
            else {
              if (this.columnData[i]<min.value) {
                min = {index:i, value:this.columnData[i]}
              }
            }
          }
          element.style.left = `${min.index * (100/this.column)}%`
          element.style.top = `${min.value}px`
          this.columnData[min.index] += picHeight
        }
        element.style.width = this.itemWidth
      }
    }
  }
</script>

<style scoped>
.waterFall{
  position: relative;
}

.column{
  position: absolute;
  padding: 3px;
  transition: all .3s ease;
}

.column img{
  max-width: 100%;
}

  
</style>
