<template>
  <el-form class="card-box login-form"
           :model="params"
           ref="params">
    <h3 class="title">hi,亲爱的用户</h3>
    <el-form-item class="mt15"
                  prop="userName"
                  :rules="required('请输入用户名')">
      <el-input placeholder="请输入用户名" v-model="params.userName">
        <i slot="prefix" class="icon-username"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="pwd"
                  :rules="required('请输入密码')"
                  class="mt20">
      <el-input :type="typePwd"
                placeholder="请输入密码"
                v-model="params.pwd">
        <i slot="prefix" class="icon-password"></i>
      </el-input>
    </el-form-item>
    <el-button type="primary" class="mt25" :loading="loading" @click="handleLogin(params)">立即登录</el-button>
  </el-form>
</template>
<style lang="scss" scoped>
  @import "login";
</style>
<script>
  import login from './login'
  export default login
</script>
