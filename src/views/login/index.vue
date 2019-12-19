<template>
  <div class='login'>

     <el-card class="login-card">

         <div  class='title'>
             <img src="../../assets/img/logo_index.png" alt="">
         </div>

         <el-form style="margin-top:20px">

             <el-form-item>
                 <el-input></el-input>
             </el-form-item>
             <el-form-item>

                 <el-input style="width:65%"></el-input>

                 <el-button style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item>

                 <el-checkbox>朕准了</el-checkbox>
             </el-form-item>
              <el-form-item>

                  <el-button plain type="success" style="width:100%">登录</el-button>
              </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login {
    background-image: url('../../assets/img/beijing.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
       width:440px;
       height:340px;
       .title {
           text-align: center;
           img {
               height:44px;
           }
       }
   }
}
</style>
