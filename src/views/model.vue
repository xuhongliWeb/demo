<template>
  <div class="vModel">
    <div class="box">
      <div class="flex">
        <div class="flex_item">
          <h2>自带v-model</h2>
          <input type="text" name id v-model="text">
          <p>父组件值：{{text}}</p>
        </div>
        <div class="flex_item">
          <h2>自带v-model</h2>
          <input type="text" name id v-model="text">
          <p>父组件值：{{text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
</style>
