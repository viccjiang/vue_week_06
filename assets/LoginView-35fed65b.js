import{_ as m,o as u,c as p,a as e,u as f,v as r,x as d,y as b,m as g,q as _}from"./index-fb9e7c09.js";const{VITE_APP_URL:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_06/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{user:{username:"",password:""}}},methods:{login(){const o=`${h}/admin/signin`;this.$http.post(o,this.user).then(s=>{const{token:l,expired:n}=s.data;document.cookie=`jiangvue3=${l}; expires=${new Date(n)};`,this.$router.push("/admin/products")}).catch(s=>{alert(s.data.message)})},goBack(){this.$router.push("/")}}},a=o=>(g("data-v-e61fb78a"),o=o(),_(),o),w={class:"container py-5 vh-100"},x={class:"row d-flex justify-content-center align-items-center h-100"},k={class:"col col-xl-10"},y={class:"card",style:{"border-radius":"1rem"}},B={class:"row g-0"},V=a(()=>e("div",{class:"col-md-6 col-lg-5 d-none d-md-block"},[e("img",{src:"https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1673936209323.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XKARezhpB%2BB4ydZYqOXEGO20Y84ZhUsdDDlSY2gSmws2bpL6XJ2Fb7bHCLQfejWFsuOxeBiMer4Vky8Q5FVqk3z%2FckqpgqNQb4OHOlnxahugf4uk6lW2FnhNOKhCbfj%2FUZ44%2BFA7FbkzS2Za3RVzNzHzzwo5kViMvdfZJR0vij0zd%2B8fIJoG0O3QJ%2B3X2lqD853pDZF2d5kxh6sJI7gH%2FRrwtLXWNjwINuKKuh5ugmNeLPLerFwqZDNG9UbB5vnjCamhTfrEbgMER%2B2FPU1ifmHAEUB1FQGgTgrBS2B2UK8XoLceVnINRUzqbZzc2AFoCbgwuNe9P9CBVwRcwHHaoQ%3D%3D",alt:"login form",class:"img-fluid h-100",style:{"border-radius":"1rem 0 0 1rem"}})],-1)),F={class:"col-md-6 col-lg-7 d-flex align-items-center"},P={class:"card-body p-4 p-lg-5 text-black"},I=a(()=>e("div",{class:"d-flex align-items-center mb-3 pb-1"},[e("i",{class:"fas fa-cubes fa-2x me-3",style:{color:"#ff6219"}}),e("div",{class:"h1 fw-bold mb-0 d-flex justify-content-center align-items-center"},"Logo")],-1)),R=a(()=>e("h5",{class:"fw-normal mb-3 pb-3",style:{"letter-spacing":"1px"}},"管理者請先登入",-1)),E={class:"form-floating mb-3"},j=a(()=>e("label",{for:"floatingInput"},"Email",-1)),z={class:"form-floating"},D=a(()=>e("label",{for:"floatingPassword"},"Password",-1)),L={class:"d-flex d-grid gap-2"},U=a(()=>e("button",{class:"btn btn-lg btn-primary w-100 mt-3 mb-3",type:"submit"}," 立即登入 ",-1)),N=b('<div class="d-flex justify-content-between align-items-center" data-v-e61fb78a><div class="form-check mb-0" data-v-e61fb78a><input class="form-check-input me-2" type="checkbox" value="" id="formRemenber" data-v-e61fb78a><label class="form-check-label" for="formRemenber" data-v-e61fb78a> Remember me </label></div><a href="#" class="small text-muted" data-v-e61fb78a>Forgot password?</a></div>',1);function S(o,s,l,n,i,c){return u(),p("div",w,[e("div",x,[e("div",k,[e("div",y,[e("div",B,[V,e("div",F,[e("div",P,[e("form",{class:"form-signin",onSubmit:s[3]||(s[3]=f((...t)=>c.login&&c.login(...t),["prevent"]))},[I,R,e("div",E,[r(e("input",{type:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>i.user.username=t),id:"floatingInput",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,i.user.username]]),j]),e("div",z,[r(e("input",{type:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=t=>i.user.password=t),id:"floatingPassword",placeholder:"Password",required:""},null,512),[[d,i.user.password]]),D]),e("div",L,[e("button",{class:"btn btn-lg btn-outline-primary w-100 mt-3 mb-3",type:"button",onClick:s[2]||(s[2]=(...t)=>c.goBack&&c.goBack(...t))}," 回到首頁 "),U]),N],32)])])])])])])])}const A=m(v,[["render",S],["__scopeId","data-v-e61fb78a"]]);export{A as default};