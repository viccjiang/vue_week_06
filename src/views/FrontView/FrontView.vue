<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <RouterLink to="/">
            <a class="navbar-brand" href="#">
              <img src="../../assets/vue.svg" alt="Logo" width="30" height="24"
                class="d-inline-block align-text-top">
              SomeSweet
            </a>
          </RouterLink>

        </div>
      </nav>
      <!-- <RouterLink class="navbar-brand" to="/">LOGO</RouterLink> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <RouterLink class="nav-link" to="/home">首頁  </RouterLink>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <RouterLink class="nav-link" to="/products">產品列表</RouterLink>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <RouterLink class="nav-link" to="/cart">購物車</RouterLink>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <RouterLink class="nav-link" to="/fullpage">Fullpage 測試</RouterLink>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <RouterLink class="nav-link" to="/login">登入</RouterLink>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import { RouterView } from 'vue-router'

export default {
  data () {
    return {

    }
  },
  components: {
    // HelloWorld,
    RouterView
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">

</style>
