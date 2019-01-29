<template>
    <div id="Home">
      <h1>Home</h1>
      <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return{
            msg:'This is Home?'
          }
      }
    }
</script>

<style scoped>

</style>
