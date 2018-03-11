<template>
<div>
  <div class="tittle">简易留言板</div>
  <div class="todolist">
    <div class="leftSide">
      <input type="text" v-model="message" placeholder="请输入留言" class="input" @keyup.enter="addMsg"><br>
      <button @click="addMsg" class="addBtn">留言</button>
    </div>
    <div style="width=.1rem;border=.1rem gainsboro solid;float:left;height:500px;"></div>  <!--分割线-->
    <div class="rightSide">
      <div class="msgBox">
        <div>留言列表</div>
        <ul class="msgList">
          <li v-for="item in msgData" class="msgItem">
            {{item.msg}}
          </li>
        </ul>
        <button @click="deleteMsg" class="delBtn" v-show="msgData.length > 0">删除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        message:'',
        msgData:[]
      }
    },
    methods: {
      addMsg() {
        var value = this.message && this.message.trim();
        if(!value){
          return
        }else{
        this.msgData.push({
          msg:this.message
        });
        }
        this.message=""; /*给下一条清空设置*/
      },
      deleteMsg() {
          this.msgData=[];
      }
    }
  }
</script>

<style scoped>
.tittle{
  background-color: gainsboro;
  line-height: 4rem;
  font-size: 2.5rem;
}

.todolist{
  display: flex;
  padding: .5rem 0;
}

.leftSide{
  flex:1;
  border-right:gainsboro .1rem solid;
}

.rightSide{
  flex:1;
}

.input{
  width: 80%;
  line-height: 2rem;
  margin-top: 1rem;
  border: gainsboro .1rem solid;
  border-radius: .5rem;
}

.addBtn{
  width: 80%;
  line-height: 1.5rem;
  border: deepskyblue .1rem solid;
  border-radius: .5rem;
  color: white;
  background-color: deepskyblue;
  margin: .5rem 0;
}
button:focus,input:focus{outline:0;} /*消除点击按钮时出现的边框*/

.msgBox{
  width: 80%;
  margin: 0 auto;
  border: gainsboro .1rem solid;
  border-radius:.5rem;
  min-height: 4rem;
  margin-top: 1rem;
}

.msgBox > div{
  line-height: 2rem;  /*line-height可以让文字垂直居中*/
  border-bottom: gainsboro .1rem solid;
  border-top-left-radius:.5rem;
  border-top-right-radius:.5rem;
  background-color: gainsboro;
}

.msgItem{
  line-height: 2rem;
  width: 100%;
  border-bottom: gainsboro .1rem solid;
}

.delBtn{
  line-height: 1.5rem;
  width: 95%;
  color: white;
  background-color: red;
  border: red .1rem solid;
  border-radius: .5rem;
  margin: .5rem 0;
}
</style>
