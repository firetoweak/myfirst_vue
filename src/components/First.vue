<template>
    <div>
      <h1>{{key}}</h1>
      <span v-bind:title="message">点这里！</span>
    </div>
</template>

<script>
   export default {
     data(){
       return {
         key:'this is first!',
         message:'页面加载于：'+new Date().toDateString(),
       }
     }
   }
</script>

<style scoped>
h1{
  color: #42b983;
}
</style>
