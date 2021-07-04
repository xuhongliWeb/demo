<template>
  <div>
    <p>值: {{vp}}</p>
    <h4>provide / inject 这对选项需要组合在一起使用，以允许一个祖先向所有子孙后代注入一个依赖，不论组件的层级有多深，并在起上下游关系里始终有效。</h4>
    <h4>provide 应该是一个对象或返回一个对象的函数，该对象包括可注入其子孙的属性在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 Symbol 和 Reflect.ownKeys 的环境下可工作。</h4>
    <h4>inject 应该是</h4>
    <ul>
      <li>一个字符串数组</li>
      <li>
        一个对象对象的key是本地的绑定名，vaLue是（字符串或symbol）一个对象，该对象的：
        from 属性是在可用的注入内容中搜索用的 key (字符串或 Symbol)
        default 属性是降级情况下使用的 value
      </li>
    </ul>
    <p>提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。</p>
  </div>
</template>
<script>
export default {
  inject: ["vp"],
  data() {
    return {};
  }
};
</script>
