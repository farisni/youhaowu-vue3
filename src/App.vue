<script setup></script>

<template>
  <!--Layout|Login 一级路由-->
  <router-view/>
</template>

<script setup>
import api from "@/api/testApi.js";

api.getCategory().then(data=>{
  console.log(data)
})
</script>
<style scoped lang="scss">
h1{
  color: $priceColor;
}
</style>
