<template>
  <el-container class="page-container">
    <el-header>
      <router-link to="/">Home</router-link>
      <router-link to="/axios">Axios</router-link>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {}
})
</script>

<style scope lang="scss">
.page-container {
  height: 100vh;
}
</style>
