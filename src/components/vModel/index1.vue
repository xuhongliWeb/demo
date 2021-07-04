<template>
  <div class>
    <h2>子组件值：{{numCopy}}</h2>
    <div class="row">
      <button @click="handleClick(1)" class="btn">Add</button>
      <button @click="handleClick(-1)" class="btn">reduce</button>
    </div>
  </div>
</template>
<script>
/**
 * 推荐
 *  v-model 语法糖 实现
 *  1. value 接收
 *  2. 暴露 自定义事件 input
 *  3. 父组件使用v-model
 *  从vue 2.2.0 开始支持自定义 v-model 语法糖
 *  model : {prop:'number',event:'change'}
 */
export default {
  props: {
    number: {
      type: Number
    }
  },
  model: {
    prop: "number",
    event: "change"
  },
  data() {
    return {
      //   numCopy: this.value
      numCopy: this.number
    };
  },
  watch: {
    // value(v) {
    //   this.numCopy = v;
    // },
    number(v) {
      this.numCopy = v;
    }
  },
  methods: {
    handleClick(val) {
      this.numCopy += val;
      //   this.$emit("input", this.numCopy);
      this.$emit("change", this.numCopy);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

