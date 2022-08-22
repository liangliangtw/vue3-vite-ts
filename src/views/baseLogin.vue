<template>
  <div class="user">
    <input v-model="state.account" type="text" placeholder="user" />
    <input v-model="state.password" type="text" placeholder="password" />
    <button @click="handleLogin()">Login</button>
    <button @click="onAdministrator">管理员登录</button>
    <button @click="onTourist">游客登录</button>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
import { allLayoutMap } from '@/router/allRouter'
const router = useRouter()
const route = useRoute()
const state = reactive({
  account: '950303',
  password: '',
})
const handleLogin = () => {
  if (state.account.trim()) {
    sessionStorage.setItem('user', state.account)
    router.push('/dashboard')
  } else {
    alert('无措')
  }
}
const onAdministrator = () => {
  sessionStorage.setItem('user', 123456)
  router.push('/dashboard')
}
const onTourist = () => {
  sessionStorage.setItem('user', 1)
  router.push('/dashboard')
}
console.log(allLayoutMap[0], '登录页allLayoutMap')
</script>
<style scoped>
.user {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
input,
button {
  width: 200px;
  margin-bottom: 25px;
}
</style>
