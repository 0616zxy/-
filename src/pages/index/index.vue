<template>
  <div>
    <el-container>
      <el-aside width="150px">
        <el-col :span="24">
          <!-- router:是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
               default-active:	当前激活菜单的 index
          -->
          <el-menu
            default-active="/index/home"
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#20222a"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/index/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/menu">菜单管理</el-menu-item>
                <el-menu-item index="/index/role">角色管理</el-menu-item>
                <el-menu-item index="/index/manger">管理员管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商城管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/classify">商品分类</el-menu-item>
                <el-menu-item index="/index/spec">商品规格</el-menu-item>
                <el-menu-item index="/index/goods">商品管理</el-menu-item>
                <el-menu-item index="/index/vip">会员管理</el-menu-item>
                <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
                <el-menu-item index="/index/seckill">秒杀活动</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <div class="user">
            {{header}}
            <el-button type="danger" @click="out">退出</el-button>
          </div>
        </el-header>

        <el-main>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 二级 路由出口 -->
          <div class="sec"><router-view></router-view></div>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      header:''
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    out(){
      sessionStorage.setItem('list','')
      sessionStorage.setItem('isLogin','')
      this.header = ''
      this.$router.push('/login')
    }
  },
  mounted() {
    var list =JSON.parse(sessionStorage.getItem('list')) 
    this.header = list.username
  },
};
</script>
<style lang=''>
.user{
  float: right;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
  text-align: center;
  height: 100vh;
  overflow: hidden;
}

.el-main {
  background-color: #fff;
  color: #333;
  height: 100vh;
}
.el-submenu .el-menu-item {
  min-width: 0;
}
.el-menu {
  border: none;
}
.sec{
  margin-top: 20px;
}
</style>