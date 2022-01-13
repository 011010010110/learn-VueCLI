<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Myheader @receive='receive'></Myheader>
        <Mylist 
					:todo="todos" 
					:checkTodo="checkTodo"
					:deleteTodo="deleteTodo"></Mylist>
        <Myfooter :todos='todos' @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></Myfooter>
      </div>
    </div>
  </div>
</template>

<script>
import Mylist from './components/Mylist.vue'
import Myfooter from './components/Myfooter.vue'
import Myheader from './components/Myheader.vue'

export default {
	name:'App',
	components: { Mylist, Myfooter, Myheader },
	data() {
		return {
			todos:JSON.parse(localStorage.getItem('todos')) || []
		}
	},
	methods: {
		/**
		 * 父组件负责提供方法，子组件负责调用传参给父组件的方法
		 * unshift，把一个新的项添加到数组起始位置
		 */
		// 添加数据
		receive(todoObj){
			this.todos.unshift(todoObj)  
		},
    // 取消勾选
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
		// 删除单一事件
		deleteTodo(id){
			this.todos = this.todos.filter((todo)=>{
				return todo.id !== id
			})
		},
		// 全选、取消全选
		checkAllTodo(done){
			this.todos.forEach((todo) => {
				todo.done = done
			})
		},
		// 清楚所有已经完成的Todo
		clearAllTodo(){
			this.todos = this.todos.filter((todo)=>{
				return !todo.done
			})
		}
	},
	watch:{
		// 给todos存到loaclStorage，防止浏览器刷新数据消失
		todos: {
			deep: true,
			handler(value){
				localStorage.setItem('todos', JSON.stringify(value))
			}	
		}
	}
}
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>