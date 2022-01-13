<template>
	<div>
    <!--通过父组件给子组件传递函数类型props实现：子给父传递数据-->
		<School :getSchoolName="getSchoolName"/>

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(使用@或者v-on)-->
		<Student @liuyue="getStudentName"/>

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（使用ref）-->
    <!-- <Student ref="student"/> -->
	</div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue"

export default {
  name: "App",
  components: {
    School,
		Student
  },
  methods: {
    getSchoolName(name) {
      console.log("App组件收到了School组件传递的学校名", name);
    },
		getStudentName(value){
			console.log('App组件收到了Student组件传递的学生名', value)
		}
  },
  // mounted() {
  //   setTimeout(()=>{
  //     // this.$refs.student.$on('liuyue',this.getStudentName) //绑定自定义时间
  //     this.$refs.student.$once('liuyue',this.getStudentName)  //绑定一次性自定义事件
  //   },3000)
  // },
};
</script>

<style scoped>
</style>