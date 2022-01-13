<template>
  <div id='leftNav'>
    <!-- <h5>分割线</h5> -->
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span @click="choseTab">接口测试工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">菜单列表</el-menu-item>
              <el-menu-item index="1-2">新增测试用例</el-menu-item>
              <el-menu-item index="1-3">测试用例列表</el-menu-item>
              <el-menu-item index="1-4">自动化测试</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>扣费查询</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Leftnav',
  methods: {
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
    },
  handleClose(key, keyPath) {
    console.log(key, keyPath);
    },
  choseTab(e){
    console.log(e.target.innerText);
    }
  },
  // 监听点击第一个tab事件
  watch: {
    immediate:true,
    choseTab(e){
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style scoped>
#leftNav{
  width: 18%;
  position: relative;
  float: left;
}

.el-submenu__title{
  min-width: 200px;
}

.el-col-12{
  width: 100%;
}

.tac el-row{
  width: auto;
}
</style>