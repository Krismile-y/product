export default {
  mounted() {
    this.$nextTick(() => {
      let wrapperH = this.$refs.scrollWrapper.offsetHeight;
      this.$refs.scrollContent.style.minHeight = wrapperH + 1 + 'px';
    });
  },
};
