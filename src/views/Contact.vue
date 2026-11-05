<template>
  <div class="content-container">
    <h1>Contact</h1>
    <p>If you have any questions, feel free to reach out to me at <a href="mailto:atmeddaugh@my.waketech.edu">atmeddaugh@my.waketech.edu</a>.</p>
  </div>
  <GoBack />
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  components: {
    GoBack
  },
  computed: {
    Id() {
      return parseInt(this.$route.params.id)
    },
    IdAsString() {
      return this.$route.params.id
    }
  }
}
</script>