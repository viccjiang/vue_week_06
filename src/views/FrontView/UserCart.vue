<template>
  <div class="container">

    <PopoverComponent></PopoverComponent>
    <p>cart</p>
    <!-- 表單驗證的部分 -->
    <div class="my-5 row justify-content-center">
      <FormView ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <FieldView id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></FieldView>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <FieldView id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
            rules="required" v-model="form.user.name" placeholder="請輸入姓名"></FieldView>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <FieldView id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
              rules="required|min:8|max:10" v-model="form.user.tel" placeholder="請輸入電話"></FieldView>
            <error-message name="電話" class="invalid-feedback"></error-message>
          </div>

        <!-- <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <input id="tel" name="電話" type="text" class="form-control"
            v-model="form.user.tel" placeholder="請輸入電話" @blur="$utils.validatePhoneNumber(form.user.tel)">
        </div> -->

        <!-- $utils.validatePhoneNumber -->

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <FieldView id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
            rules="required" v-model="form.user.address" placeholder="請輸入地址"></FieldView>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">交易方式</label>
          <FieldView id="name" name="交易方式" class="form-select" :class="{ 'is-invalid': errors['交易方式'] }"
            placeholder="請輸入交易方式" rules="required" v-model="form.user.shipping" as="select">
            <option value="">請選擇交易方式</option>
            <option value="ATM">ATM</option>
            <option value="匯款">匯款</option>
            <option value="信用卡">信用卡</option>
          </FieldView>
          <error-message name="交易方式" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30" rows="10" v-model="form.user.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>

        </div>
        <button type="button" class="btn btn-outline-danger" @click="getOrders">取得所有目前訂單 </button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">訂單編號</th>
              <th scope="col">購買時間</th>
              <th scope="col">產品價格</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.create_at }}</td>
              <td>{{ item.total }}</td>

            </tr>
          </tbody>
        </table>

      </FormView>

    </div>
  </div>
</template>

<script>
import PopoverComponent from '../../components/PopoverComponent.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    PopoverComponent
  },
  data () {
    return {
      isLoading: false,
      products: [],
      cart: {},
      productId: '',
      loadingItem: '', // 存 id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          shipping: ''
        },
        message: ''
      },
      orders: []
    }
  },
  // components: {
  //   productDetailModal
  // },
  methods: {
    getProducts () {
      this.isLoading = true
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then(res => {
          console.log('產品列表:', res.data.products)
          this.products = res.data.products
          this.isLoading = false
        })
    },

    getCarts () {
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
        .then(res => {
          console.log('購物車:', res.data)
          this.cart = res.data.data
        })
    },
    // addToCart (product_id, qty = 1) {
    //   console.log(product_id, qty)
    //   // 當沒有傳入該參數時，會使用預設值
    //   const data = {
    //     product_id,
    //     qty
    //   }
    //   this.$http.post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
    //     .then(res => {
    //       console.log('加入購物車', res.data)
    //       this.$refs.productDetailModal.hide()
    //       this.getCarts()
    //     })
    // },
    updateCartItem (item) {
      // 購物車的 id, 產品的 id
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.$http.put(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          console.log('更新購物車', res.data)
          this.getCarts()
        })
    },
    deleteItem (id) {
      this.$http.delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${id}`)
        .then(res => {
          console.log(res)
          this.getCarts()
        })
    },
    deleteAllItem () {
      this.$http.delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/carts`)
        .then(res => {
          console.log(res)
          this.getCarts()
        })
    },
    // openModal (product_id) {
    //   console.log(product_id)
    //   this.productId = product_id
    //   console.log('外層帶入 productId:', product_id)
    // },
    createOrder () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((response) => {
        console.log(response)
        alert(response.data.message)
        this.$refs.form.resetForm()
        this.getCarts()
      }).catch((err) => {
        alert(err.data.message)
      })
    },
    getOrders () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/orders`
      this.$http.get(url)
        .then(res => {
          console.log(res.data.orders)
          this.orders = res.data.orders
        })
    }
  },
  mounted () {
    this.getProducts()
    this.getCarts()
    // this.getOrders();
  }

}
</script>

<style scoped></style>
