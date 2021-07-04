<template>
  <div class="vModel">
    <button @click="toRedirect">toRedirect</button>
    <div class="box">
      <div class="flex">
        <div class="flex_item">
          <h2>插槽</h2>
          <v-slot>
            <template v-slot:header>
              <em>传入的HEADER</em>
            </template>
          </v-slot>
        </div>
        <div class="flex_item">
          <h2>作用域插槽 slot-scope</h2>
          <v-slot-one :list="list">
            <template slot-scope="{user}">
              <span v-if="user.isTop" class="red">置顶</span>
              {{user.title}}
            </template>
          </v-slot-one>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vSlot from "@/components/slot";
import vSlotOne from "@/components/slot/index1";
export default {
  components: {
    vSlot,
    vSlotOne
  },
  data() {
    return {
      text: "",
      list: [
        {
          title: "新闻1",
          isTop: false,
          isNew: true
        },
        {
          title: "新闻2",
          isTop: true,
          isNew: true
        },
        {
          title: "新闻3",
          isTop: false,
          isNew: true
        },
        {
          title: "新闻4",
          isTop: true,
          isNew: false
        },
        {
          title: "新闻5",
          isTop: false,
          isNew: true
        }
      ]
    };
  },
  methods: {
    toRedirect() {
      const { name } = this.$route;
      this.$router.push({
        name: "redirect",
        params: {
          url: name
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
</style>
