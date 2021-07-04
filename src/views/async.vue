<template>
  <div class="home">
    <h3>异步加载组件</h3>
    <button @click="toggle">异步加载组件</button>
    <div v-if="show" class="show">
      <asyncHello msg="Async"/>
      <!-- <HelloWorld1 msg="Welcome to Your Vue.js App"/> -->
    </div>

  </div>
</template>

<script>
import LoadingComponent from "@/components/loading"
import ErrorComponent from "@/components/err"
// import HelloWorld from '@/components/HelloWorld.vue';
const asyncHello = () => ({
  component:import (/* webpackChunkName: "Hello" */ "@/components/async"),
  loading:  LoadingComponent, // 加载成功
  error: ErrorComponent, // 失败
  delay:200, // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  timeout:3000, // 加载组件最大时长,否则显示失败组件
})
export default {
  name: "home",
  components: {
    asyncHello,
    // HelloWorld1:() => import (/* webpackChunkName: "Hello" */ "@/components/async"),
  },
  data(){
    return {
      show:false,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  }
};
</script>
