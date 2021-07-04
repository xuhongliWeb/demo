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
 * vue 2.3.0 新增 .sync
 * 子组件this.$emit('update:number',number)
 * 父组件：number.sync="number"
 * 不能和表达式一起使用 （如 v-bind：title.sync="doc.title +'!'"）
 * 不能和字面量对象一起使用 （如 v-bind.sync="{title:doc.title}"）
 */
export default {
  props: {
    number: {
      type: Number
    }
  },
  data() {
    return {
      //   numCopy: this.value
      numCopy: this.number
    };
  },
  methods: {
    handleClick(val) {
      this.numCopy += val;
      //   this.$emit("input", this.numCopy);
      this.$emit("update:number", this.numCopy);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

