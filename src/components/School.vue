<template>
  <div id="box1">
    <h1>学校名字：{{ name }}</h1>
    <h1>建校时间：{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ['getSchoolName'],
  data() {
    return {
      name: "你猜",
      age: "1937",
    };
  },
  mounted() {
    this.$bus.$on('hello', (data)=>{
      console.log(data, "被School组件收到了");
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')  //全局时间总线解绑中的$off内部必须加参数
  }
};
</script>

<style scoped>
#box1 {
  background-color: bisque;
  height: 200px;
}
</style>