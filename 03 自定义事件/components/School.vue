<template>
  <div id="box1">
    <h1>学校名字：{{ name }}</h1>
    <h1>建校时间：{{ age }}</h1>
    <button @click="sendSchoolName">点击获取学校名字</button>
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
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>

<style scoped>
#box1 {
  background-color: bisque;
  height: 200px;
}
</style>