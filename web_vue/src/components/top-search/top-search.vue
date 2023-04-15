<template>
  <div class="top-search-bar" @click="handleClickSearchBar">
    <div class="top-search-container border-1px--surround">
      <cube-input
        clearable
        ref="input"
        :disabled="disabled"
        v-model="value"
        :placeholder="placeholder"
        type="search"
        @search.native="handleSearch"
      ></cube-input>
      <div @click="handleSearch" class="search-right border-1px--left">
        <i class="iconsuosou iconfont"></i>
        <span>tìm kiếm</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '搜索你想要的商品',
    },
  },
  data() {
    return {
      value: '',
    };
  },
  watch: {
    keyword(newValue) {
      this.value = newValue;
      this.handleSearch();
    },
    value(newValue) {
      if (!newValue.trim()) {
        this.$emit('empty');
      }
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    handleClickSearchBar() {
      if (this.disabled) {
        this.$router.push('/search');
      }
    },
    handleSearch() {
      if (!this.value.trim()) {
        this.value = this.placeholder;
      }
      this.$refs.input.blur();
      this.$emit('search', this.value);
    },
  },
};
</script>

<style lang="stylus" scoped>
.top-search-bar
  padding 5PX 15px
  background-color #fff
.top-search-container
  display flex
  height 34px
.top-search-container::after
  border-radius 34px
.cube-input
  flex 1
  &::after
    display none
  & >>> .cube-input-field
    padding 0 10px 0 15px
    height 100%
    line-height 1
.search-right
  display flex
  align-items center
  justify-content center
  width 72px
.search-right .iconfont
  font-size 18px
.search-right span
  font-size 16px
  margin-left 4px
</style>
