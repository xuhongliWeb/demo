<template>
  <div class="swiper" @touchstart="touchStart" @touchend="touchEnd">
    <div
      :class="['swiper_item',isActive=== index ? 'active':'']"
      v-for="(item,index) in swiperData"
      :key="index"
    >{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperData: [1, 2, 3, 4, 5],
      gapNum:0,
      isActive: 1,
      startClientX:0, // 开始点击的位置
      endClientX:0, // 介绍点击的位置
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let swiperItem = document.querySelectorAll(".swiper_item");
      console.log(swiperItem.length, " swiperItem.length");

      let swiperWidth = swiperItem[0].clientWidth;
      for (let i = 0; i < swiperItem.length; i++) {
        swiperItem[i].style.left = swiperWidth * i + "px";
      }
      console.log(swiperWidth, "swiperWidth");
    },
    /**
     * kaishi滑动
     */
    touchStart(e) {
      console.log( e.changedTouches[0].clientX, "开始");
     this.startClientX = e.changedTouches[0].pageX;

     console.log(this.startClientX,'startClientX ')
    },
    /**
     * 滑动结束
     */
    touchEnd(e) {
      console.log(e, "结束");
      // :style="{'left':gapNum===0?'':gapNum+'px'}"
     this.endClientX = e.changedTouches[0].pageX;
     this.gapNum = this.startClientX - this.endClientX
      console.log(this.startClientX,'star')
      console.log(this.endClientX,'end')
      console.log(this.gapNum,'gapNum')
     if(this.startClientX - this.endClientX > 0){
      this.isActive ++
     }
   if(this.startClientX - this.endClientX < 0){
      this.isActive --
     }
    }
  }
};
</script>
<style lang="less" scoped>
.swiper {
  width: 320px;
  overflow: hidden;
  position: relative;
  height: 100px;
  &_item {
    position: absolute;
    left: 0;
    background: orange;
    margin: 0 4px;
    width: 120px;
    transform: scale(0.8);
    transition: all 0.3s ease-in;
    height: 100px;
  }
  .active {
    transform: scale(1);
  }
}
</style>
