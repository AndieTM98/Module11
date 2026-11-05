<template>
    <div id="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/quote-generator">Quote Generator</router-link> 
        <router-link to="/contact">Contact</router-link> 
    </div>
</template>

<style scoped lang="css">
#nav .active {
    font-weight: bold;
    color:aqua;
}

</style>