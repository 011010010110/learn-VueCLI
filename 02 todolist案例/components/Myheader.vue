<template>
  <div class="todo-header">
    <input type="text" 
			placeholder="请输入你的任务名称，按回车键确认" 
			@keyup.enter="add" 
			v-model="title">
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'Myheader',
	props: ['receive'], //props：接受数据，数据来源于父
	data() {
		return {
			title: '',
			}
		},
		methods: {
			add(){
				if (this.title == '') {
					return alert("输入不能为空")
				}
				const todoObj = {id:nanoid(), title: this.title, done: false}
				this.receive(todoObj)   //receive是父组件的一个函数，子组件负责调用然后传参给父组件，实现父组件数据更新
				this.title = ''
		}
	}
}

</script>

<style scoped>
	/*header*/
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>
