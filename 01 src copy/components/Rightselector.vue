<template>
  <div class="selector">
    <el-breadcrumb separator="/" style="margin-top: 10px">
      <el-breadcrumb-item>接口测试工具</el-breadcrumb-item>
      <el-breadcrumb-item>{{nameOne}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="value" placeholder="请选择" class="Selector">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.label">
      </el-option>
    </el-select>
    &nbsp;
    <button class="Sub" @click="sub">确定</button>
  </div>
</template>

<script>
export default {
  name: 'Rightselector',
  data() {
    return {
      nameOne: 'sda',
      letter:'',
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  methods: {
    sub(){
      console.log(this.options)
    },
    nameTwo(letter){
      console.log(letter)
    }
  },
}
</script>

<style>
.selector{
  width: 79%;

  /* position: absolute; */
  float: right;
}
.Sub{
  width: 50px;
}
.Selector{
  margin-top: 50px;
}
</style>