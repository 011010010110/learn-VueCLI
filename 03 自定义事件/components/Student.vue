<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">点击把学生名发送给App</button>
    <button @click="unbind">解绑liuyue事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "June",
      age: "23",
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件示例对象身上的liuyue事件
      this.$emit("liuyue", this.name);
    },
    // 解绑liuyue事件
    unbind(){
      this.$off('liuyue')   // 解绑一个事件
      // this.$off(['liuyue', 'demo'])   // 解绑多个事件
      // this.$off()  //全部解绑 
    }
  },
};
</script>

<style  scoped>
div {
  background-color: aqua;
  margin-top: 100px;
}
</style>