<template>
  <div class="example">
    {{ msg }}
    <img :src="url" />
  </div>
</template>

<script>
import logo from './assets/logo.png';
import getData from './utils/getData';

export default {
  data() {
    return {
      msg: 'Hello Vue1',
      url: logo,
    };
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.example {
  color: red;
}
</style>
