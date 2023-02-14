<template>
  <p>HOME HOME</p>
  <router-view></router-view>
  <div class="home">
    <h1> HOME PAGE</h1>
    <SwiperComponent></SwiperComponent>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import SwiperComponent from '../../components/SwiperComponent.vue'

export default {

  components: {
    HelloWorld,
    SwiperComponent

  }
}
</script>

<style scoped>

</style>
