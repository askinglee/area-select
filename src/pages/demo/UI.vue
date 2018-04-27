<template>
  <main class="container">
    <h3 class="el-icon-star-on"> 省市区</h3>
    <p>
      <city v-model="city" class="city"></city>
      <span>{{city}}</span>
    </p>
  </main>
</template>

<script>
import City from './City'
export default {
  components: {City},
  data () {
    return {
      msg: 'DEMO PAGE!',
      city: '',

    }
  }
}
</script>
<style scoped>
  .container {
    padding: 50px;
  }
  h3 ~ p:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  .city {
    width: 130px;
  }
</style>
