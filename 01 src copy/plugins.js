export default{
  install(Vue, value){
    console.log(value);
    // Vue原型上的方法，vm和vc都能用
    Vue.prototype.hello = ()=>{alert('hello')}
  }
}
