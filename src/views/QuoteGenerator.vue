<template>
  <div id="app" class="container">
    <h1>Random Quote Generator</h1>
    <div class="quote-container">
      <!-- Display the quote or a loading message -->
      <p v-if="loading">Loading...</p>
      <p v-else>"{{ quote }}"</p>
      <p class="author">— {{ author }}</p>
      <button class="btn" @click="fetchQuote">Get New Quote</button>
    </div>
    <GoBack />
  </div>
</template>

<script>
import axios from 'axios'
import GoBack from '../components/GoBack.vue'

export default {
  name: 'App',
  data() {
    return {
      quote: '',
      author: '',
      loading: false
    }
  },
  methods: {
    async fetchQuote() {
      this.loading = true
      try {
        const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
        headers: {
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
          'X-RapidAPI-Key': '4fab6fc910msh62a2d20d3bc605bp14cb6ajsn640e6bc6e3e5',
        }
        })
        // Update quote and author with the response data
        this.quote = response.data.content
        this.author = response.data.originator.name
        this.loading = false
      } catch (error) {
        console.error('Error fetching quote:', error)
        this.quote = 'Failed to fetch quote.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.fetchQuote()
  },
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

<style scoped>
  .container {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 50px;
}

.quote-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin-top: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #c53062;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease background;
}
.btn:hover {
  background: #720e2a;
}

.author {
  color: #555;
  margin-top: 5px;
  font-style: italic;
}
</style>
