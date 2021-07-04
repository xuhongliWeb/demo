<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/vmodel">vModel</router-link>
      <router-link to="/slot">slot</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/provideInject">provideInject</router-link>
      <router-link to="/swiper">swiper</router-link>
      <router-link to="/async">异步加载组件</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      app: this
    };
  },
  data() {
    return {
      appList: "我是app.vue"
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
.red {
  color: red;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box {
  width: 800px;
  margin: 0 auto;
  min-width: 600px;
}
.flex {
  display: flex;
}
.flex_item {
  flex: 1;
}
.btn {
  margin: 0 4px;
}
</style>
