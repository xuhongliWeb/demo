<template>
  <div class="slot">
    <div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <slot :user="item">{{item.title}}</slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/**
 * slot-scope
 */
export default {
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>
