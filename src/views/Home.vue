<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="toRedirect">toRedirect</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    toRedirect() {
      const { fullPath } = this.$route;
      this.$router.push({
        path: "/redirect" + fullPath
      });
    }
  }
};
</script>
