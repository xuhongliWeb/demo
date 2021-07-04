<template>
  <div>redirect</div>
</template>
<script>
export default {
  beforeCreate() {
    const { params, query } = this.$route;
    const { url } = params;
    this.$router.replace({ name: url, query });
  },
  render: function(h) {
    return h(); // avoid warning message
  }
};
</script>
