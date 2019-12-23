<template>
  <el-container>
    <!-- 左右布局 -->
    <el-aside  style="width:225px">
     <left-aside></left-aside>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        <right-aside></right-aside>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import leftAside from '../../components/home/left-aside'
import rightAside from '../../components/home/right-aside'
export default {
  components: {
    'left-aside': leftAside,
    'right-aside': rightAside
  }
}
</script>

<style>

</style>
