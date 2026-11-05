<template>
  <div class="about">
    <div class="content-container">
      <h1>About</h1>
      <p>This is a web application for Web 125 to practice Vue.js routing and component usage.</p>
    </div>
    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  components: {
    GoBack
  },
  computed: {
    Id() {
      return this.$route.params.id
    }
  }
}
</script>
