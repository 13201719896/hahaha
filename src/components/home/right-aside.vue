<template>
  <el-row class='rightAside' type='flex' align="middle">
     <el-col class='left' :span="12">
         <i class='el-icon-s-operation'></i>
         <span>江苏传智播客教育科技股份有限公司</span>
     </el-col>
     <el-col class='right' :span="12">
         <el-row type='flex' justify="end" align="middle">
             <img :src="userInfo.photo" alt="">
             <el-dropdown @command="clickMeru">
                 <span>{{userInfo.name}}</span>
                 <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item command="info">个人信息</el-dropdown-item>
                     <el-dropdown-item command="git">git地址</el-dropdown-item>
                     <el-dropdown-item command="lgout">退出</el-dropdown-item>
                 </el-dropdown-menu>
             </el-dropdown>
         </el-row>
     </el-col>

  </el-row>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    let token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  },
  methods: {
    //     clickMenu (command) {
    //       if (command === 'info') {

    //       } else if (command === 'git') {
    //         window.location.href = 'https://github.com/'
    //       } else {
    //         window.localStorage.removeItem('user-token')
    //         this.$router.push('/login')
    //       }
    //     }
    //   }
    // }
    clickMeru (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        //   跳转到git地址
        window.location.href = 'https://github.com/shuiruohanyu/90heimatoutiao'
      } else {
        //    退出
        window.localStorage.removeItem('user-token') // 删除令牌
        this.$router.push('/login') // 回到登录页
      }
    }
  }
}
</script>

<style lang="less" scoped>
.rightAside {
    height:60px;
    .left {
        font-size: 20px;
        span {
           color: #2c3e50;
           font-size: 16px;
           margin-left:4px;
        }
    }
    .right {
      img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
      }
    }
}
</style>
