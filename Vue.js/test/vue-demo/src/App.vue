<template>
  <nav>
    <router-link to="/">Login</router-link>
    <span> / </span>
    <router-link to="/about">A propos</router-link>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  methods: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
