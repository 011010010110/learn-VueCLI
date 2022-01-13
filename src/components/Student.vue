<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名传递给School组件</button>
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
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

<style  scoped>
div {
  background-color: aqua;
  margin-top: 100px;
}
</style>