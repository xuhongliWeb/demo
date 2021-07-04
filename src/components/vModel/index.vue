<template>
  <div class>
    <h2>子组件值：{{numCopy}}</h2>
    <div class="row">
      <button @click="handleClickAdd" class="btn">Add</button>
      <button @click="handleClickReduce" class="btn">reduce</button>
    </div>
  </div>
</template>
<script>
/**
 * 不推荐
 */
export default {
  props: {
    num: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      numCopy: this.num
    };
  },
  methods: {
    handleClickAdd() {
      this.numCopy++;
      this.$emit("handleClick", this.numCopy);
    },
    handleClickReduce() {
      this.numCopy--;
      this.$emit("handleClick", this.numCopy);
    }
  }
};
</script>
<style lang="less" scoped>
</style>

