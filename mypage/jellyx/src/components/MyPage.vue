<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>同性交友了解一下</h2>
    <ul>
      <li>
        <a
          href="https://www.bilibili.com"
          target="_blank" 
        > <!--target="_blank"是点链接后弹出新窗口-->
          哔哩哔哩
        </a>
      </li>
      <li>
        <a
          href="http://bbs.ngacn.cc/"
          target="_blank"
        >
          NGA
        </a>
      </li>
      <li>
        <a
          href="http://www.lknovel.cn"
          target="_blank"
        >
          轻之国度
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://www.acfun.cn/"
          target="_blank"
        >
          AcFun
        </a>
      </li>
      <li>
        <a
          href="http://www.tsdm.me/"
          target="_blank"
        >
          天使动漫
        </a>
      </li>
    </ul>
    <h2>里世界</h2>
    <a href="http://www.tumblr.com" class="violet">
      Tumblr
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '你来了？'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.violet {
  font-weight:bold;
  font-size:18px;
}
</style>
