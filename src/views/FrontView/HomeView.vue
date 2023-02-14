<template>
<p>HOME HOME</p>

    <hr>
    <router-view></router-view>
  <div class="home">
   <h1> HOME PAGE</h1>
   <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {

  components: {
    HelloWorld

  }
}
</script>

<style scoped>
</style>
