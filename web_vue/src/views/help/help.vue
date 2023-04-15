<template>
  <div class="am-text-break" id="content">
    <Header :title="headerTitle"></Header>
    <p style="padding:0 5px"></p>
  </div>
</template>
<script>
import Header from '_com/header/header';
export default {
  data() {
    return {
      headerTitle: 'Trung tâm dịch vụ',
    };
  },
  components: {
    Header,
  },
};
</script>
