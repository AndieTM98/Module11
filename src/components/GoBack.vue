<template>
    <span class="go-back">
        <button class="btn" v-on:click="$router.back()">Go Back</button>
    </span>
</template>

<style scoped>
/* Fix Go Back button in place below any content */
.go-back {
  display: block;
  margin-top: 20px;
}
</style>