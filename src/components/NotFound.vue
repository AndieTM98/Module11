<template>
    <div>
        <h1>404 - Page Not Found</h1>
        <GoBack />
        <router-link to="/">Go to Home</router-link>
    </div>
</template>

<script>
import GoBack from './GoBack.vue'

export default {
    components: {
        GoBack
    }
}
</script>