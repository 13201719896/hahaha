<template>
  <!-- <div class='login'>

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
  </div> -->
   <div class='login'>
      <!-- 使用elementUI组件 el-card -->
     <el-card class="login-card">
         <!-- 匿名插槽 -->
         <div  class='title'>
           <img src="../../assets/img/logo_index.png" alt="">
         </div>
         <!-- 表单 => el-form包裹 -->
         <!-- 数据校验 => el-form绑定 model ,绑定rules规则 -->
         <el-form ref="myForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
             <!-- 每一个表单域由一个 Form-Item 组件构成 -->
             <!-- form-item  prop属性 绑定 下面表单组件的 字段名 -->
             <el-form-item prop="mobile">
                 <!-- 表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker -->
                 <!-- 手机号 绑定 v-model -->
                 <el-input v-model="loginForm.mobile" placeholder="请输入手机号" ></el-input>
             </el-form-item>
             <el-form-item prop="code">
                 <!-- 验证码 -->
                 <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>
                 <!-- 发送验证码 -->
                 <el-button  style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item prop="agree">
                 <!-- 同意选项 -->
                 <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
              <el-form-item>
                  <!-- 登录按钮 -->
                  <!-- 注册点击事件 -->
                  <el-button @click="login"  type="primary" style="width:100%">登录</el-button>
              </el-form-item>
         </el-form>
     </el-card>
  </div>
</template>

<script>
// import { homedir } from 'os'
// export default {
//   data () {
//     return {
//       loginForm: {
//         mobile: '',
//         code: '',
//         cheak: false
//       }
//     }
//   }
// }
export default {
  data () {
    let validator = function (rule, value, callBack) {
      value ? callBack() : callBack(new Error('请勾选我已阅读并同意该协议'))
    }
    return {
      // 表单数据 是一个对象
      loginForm: {
        mobile: '13911111111', // 手机号
        code: '246810', // 验证码
        agree: true // 是否同意协议
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agree: [{ validator }]
      } // 登录规则集合对象
      // 自定义形式去校验
    }
  },
  methods: {
    login () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '手机号或者验证码错了呢我的小宝贝。'
            })
          })
        }
      })
    }
  }
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
