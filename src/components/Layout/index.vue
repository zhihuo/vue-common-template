
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
<template>
  <el-container>
    <el-header>
      <head-con></head-con>
    </el-header>
    <el-container>
      <sidebar></sidebar>
      <slot name="main"></slot>
    </el-container>
  </el-container>
</template>

<script>
import HeadCon from './HeadCon.vue';
import Sidebar from './Sidebar/index.vue';

export default {
  name: 'layout',
  components: {
    HeadCon,
    Sidebar
  }
};
</script>
