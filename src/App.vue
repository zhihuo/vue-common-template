
<template>
  <div id="app">
    <router-view v-if="enShowLayout"></router-view>
    <layout v-else>
      <router-view slot="main"></router-view>
    </layout>
  </div>
</template>
<script>
import Layout from '@/components/Layout/index.vue';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    Layout
  },
  computed: {
    enShowLayout() {
      // 不显示layout，login，register页面一般不需要layout
      // 默认都显示layout
      return Boolean(this.$route.meta.enShowLayout);
    }
  }
};
</script>
