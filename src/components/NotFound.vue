<template>
  <div class="not-found">
    <div class="glitch-wrapper">
      <div aria-hidden="true" class="code">404</div>
      <div class="code glitch" data-text="404">404</div>
    </div>

    <p class="message">페이지를 찾을 수 없습니다</p>
    <p class="sub">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>

    <button class="home-btn" @click="goHome">홈으로 돌아가기</button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = (): void => {
  router.push('/')
}
</script>

<style scoped>

</style>