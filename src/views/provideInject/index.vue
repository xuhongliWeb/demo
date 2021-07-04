<template>
  <div class="vModel">
    <div class="box">
      <div class="flex">
        <div class="flex_item">
          <h2>provide / inject</h2>
          <div>
            <button @click="changeV">改变provide</button>
          </div>
          <provide-one></provide-one>
        </div>
        <div class="flex_item">
          <h2>来自app。vue 的数组</h2>
          <p>值：{{app.appList}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import provideOne from "@/components/provide";
export default {
  components: {
    provideOne
  },
  inject: ["app"],
  provide: {
    vp: this
  },
  data() {
    return {
      text: "",
      vqq: "父组件"
    };
  },
  methods: {
    changeV() {
      this.vqq = "我改变了";
    }
  },
  created() {
    console.log(this.vqq, "------this.v");
  }
};
</script>
<style lang="less" scoped>
</style>
