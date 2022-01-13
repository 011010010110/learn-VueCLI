<template>
  <ul class="todo-main">
    <Myitem 
			v-for="todoObjj in todo" 
			:key="todoObjj.id" 
			:todo="todoObjj" 
			:checkTodo="checkTodo"
			:deleteTodo="deleteTodo"/>
  </ul>
</template>

<script>
import Myitem from './Myitem.vue'
export default {
  name: 'Mylist',
  components: {Myitem},
	props:["todo", "checkTodo", "deleteTodo"],  //这里是父组件中:后面的名字---><Mylist :todo="todos"></Mylist>
}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>
