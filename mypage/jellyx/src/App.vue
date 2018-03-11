<template>
  <div id="app">
    <header>
      <div class="icon">
      <img src="../static/img/icon.png" alt="icon" width="20px" height="20px"/>
      </div>
      <ul class="headerNav">
        <li><router-link to="/login" class="login">Login</router-link></li>
        <li><router-link to="/register" class="register">Register</router-link></li>
      </ul>
    </header>
    <nav class="nav">
      <ul class="leftNav">
        <li v-for="leftItem in leftItems"> <!--@click="Gakki(leftItem)"  leftitem不写到carousel里的话参数传不过去的，因为都是局部作用域-->
         <router-link :to="'/'+leftItem.text"> {{leftItem.text.toUpperCase()}}</router-link>
        </li>
      </ul>
      <div class="theme">
        <router-link to="/">Jellyx</router-link>
      </div>
      <ul class="rightNav">
        <li v-for="rightItem in rightItems">
          <router-link :to="'/'+rightItem.text">{{rightItem.text.toUpperCase()}}</router-link>
        </li>
      </ul>
    </nav>
    <div id="content">
      <router-view></router-view>
    </div>
    <footer>
      <div class="footerNav">
        <ul class="footerNavList">
          <li v-for="footerNavItem in footerNavItems">
            <a href="javascript:">{{footerNavItem.text}}</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>          
export default {
  el:"#app",
  name: 'App',
  data() {
    return {
      leftItems: [
        {
          text:'home'
        },
        {
          text:'gakki'
        }
      ],
      rightItems: [
        {
          text:'shop'
        },
        {
          text:'todolist'
        }
      ],
      footerNavItems: [
        {
          text:'免责声明'
        },
        {
          text:'关于我们'
        },
        {
          text:'内容许可'
        },
        {
          text:'联系方式'
        }
      ]
    }
  }
}
</script>

<style>
 @import './assets/css/APP.css'
</style>
