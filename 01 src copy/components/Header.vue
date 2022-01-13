<template>
  <div id="headerinfo">
    <button @click="newInfo" id="firstBtn">+ New</button>
    <button @click="importInfo" id="secondBtn">Import</button>
    <button @click="runProject" id="thirdBtn">Runner</button>
    <p>测试工具</p>
    <select id="selectEnv" v-model="selectClass" placeholder="请选择">
      <option
       v-for="item in datas" 
       :key="item.id" 
       :value="item.value"
       :label="item.name">
       </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      datas: [
        {id:1, name:"测试环境", value: 454},
        {id:2, name:"预发布环境", value: 458},
        {id:3, name:"生产环境", value: 494}
        ],
        selectClass: ""
    }
  },
  methods: {
    newInfo(){
      console.log(this.hello());
      },
    importInfo(){
      return alert("功能还没开发，只是有个页面，再等等吧2")
    },
    runProject(){
      return alert("功能还没开发，只是有个页面，再等等吧3")
    },
  },
  watch: {
    selectClass: {
      immediate: true,
      handler(newValue){
        console.log("watch被调用，返回值为",newValue);
      }
    } 
  }
}
</script>

<style scoped>
#headerinfo{
  background-color: #282424;
  height: 50px;
  margin: auto;
  width: 100%;
  position: relative;
  /* border-radius: 5px; */
}
#firstBtn, #secondBtn, #thirdBtn, #invite{
  height: 30px;
  width: 60px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #444444;
  color: white;
}
#firstBtn{
  background-color: #f46c3c;
  margin-left: 8px;
}
#headerinfo > p{
  display: inline-block;
  color: white;
  padding-top: 12px;
  position: absolute;
  left: 47.25%;
}
#invite{
  position: absolute;
  float: left;
  left: 51%;
  text-align: center;
}
#selectEnv{
  float: right;
  margin: 13px 10px 0 0;
}
</style>