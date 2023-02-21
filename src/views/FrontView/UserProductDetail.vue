<template>
<div class="container">
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-12 col-md-6">
      <img :src="product.imageUrl" class="img-fluid" alt="">
    </div>
    <div class="col-12 col-md-6">{{product.title}}</div>
  </div>
</div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      const id = this.$route.params.id
      console.log(id)
      this.$http.get(`${VITE_APP_URL}api/${VITE_APP_PATH}/product/${id}`)
        .then(res => {
          console.log(res.data)
          this.product = res.data.product
        })
    }
  },
  mounted () {
    this.getProduct()
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
