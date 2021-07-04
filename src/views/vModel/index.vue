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
          <h2>组件v-model -- 一</h2>
          <v-model-general :num="num1" @handleClick="handleClick"></v-model-general>
          <p>父组件值：{{num1}}</p>
        </div>
        <div class="flex_item">
          <h2>组件v-model -- 二 自定义v-model</h2>
          <v-model-general-one v-model="num2"></v-model-general-one>
          <p>父组件值：{{num2}}</p>
        </div>
        <div class="flex_item">
          <h2>组件v-model -- 三 .sync</h2>
          <v-model-general-three :number.sync="num3"></v-model-general-three>
          <p>父组件值：{{num3}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vModelGeneral from "@/components/vModel";
import vModelGeneralOne from "@/components/vModel/index1";
import vModelGeneralThree from "@/components/vModel/index2";

export default {
  components: {
    vModelGeneral,
    vModelGeneralOne,
    vModelGeneralThree
  },
  data() {
    return {
      text: "",
      num1: 0,
      num2: 0,
      num3: 0
    };
  },
  methods: {
    handleClick(num) {
      this.num1 = num;
    }
  }
};
</script>
<style lang="less" scoped>
</style>
