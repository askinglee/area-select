<template>
  <section id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import "./assets/scss/docs";
</style>
