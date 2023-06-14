<template>
  <div class="hello">
    <h1>Hello App!</h1>
    <router-link to="/">GO TO HOME</router-link>
    <router-link to="/index">GO TO FUCK</router-link>
    <router-link to="/second">GO TO SECOND</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
