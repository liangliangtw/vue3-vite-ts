<template>
  <div class="user">
    <input v-model="state.account" type="text" placeholder="user" />
    <input v-model="state.password" type="text" placeholder="password" />
    <button @click="handleLogin()">Login</button>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
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
