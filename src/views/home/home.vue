<template>
  <div class="block">
    <span   class="demonstration"></span>
    <el-carousel height="90vh">
      <el-carousel-item v-for="item in list" :key="item">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img :src="item" alt=""  width="100%" >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577107110232&di=d9f31d65faa43380f4d1a1b8d1ad7f64&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F5939fa1875ebe.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577107110224&di=b4b92804c1162c919d12a71c35ff13b9&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1305%2F16%2Fc5%2F20997352_1368694364638.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577107110221&di=33d2c56117cb5ef5eba0d4807bf46bf6&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-01-12%2F5a58177ab98af.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577107110221&di=be5d16f22ad89949f3c7c03d8595553d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F57a84fe3ecd70.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577108285013&di=e93e36891fc494018cbd2acd857d916c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F57440d1d56afb.jpg']
    }
  }
}
</script>

<style>
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
