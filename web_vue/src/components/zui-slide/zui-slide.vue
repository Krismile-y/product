<template>
  <div class="slide-wrapper">
    <cube-slide ref="slide" :data="data" :options="{ useTransition: false }">
      <template v-if="type == 'object'">
        <cube-slide-item
          @click.native="handleClickItem(item.link)"
          v-for="(item, index) in data"
          :key="item.id"
        >
          <img
            class="slide-img"
            style="width: 100%; height: 100%; object-fit: cover;"
            :src="item.thumb"
            @load="onImgLoaded(index)"
            alt=""
          />
        </cube-slide-item>
      </template>

      <template v-else>
        <cube-slide-item v-for="(item, index) in data" :key="index">
          <img
            class="slide-img"
            style="width: 100%; height: 100%; object-fit: cover;"
            :src="item"
            @load="onImgLoaded(index)"
            alt=""
          />
        </cube-slide-item>
      </template>
    </cube-slide>
    <cube-loading v-if="!complete"></cube-loading>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: 'object',
    },
  },
  data() {
    return {
      complete: false,
    };
  },
  activated() {
    this.$refs.slide.refresh();
  },
  methods: {
    onImgLoaded(index) {
      if (index === 0) {
        this.complete = true;
      }
    },
    handleClickItem(url) {
      if (url) {
        location.href = url;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.slide-wrapper
  position relative
  .cube-loading
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
</style>
