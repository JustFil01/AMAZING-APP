<template>
  <div id="app">
    <!-- <loader></loader> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return { navIsOpen: false };
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen;
    }
  },
  watch: {
    '$route'() {
      this.navIsOpen = false;
    }
  }
};
</script>

<style scoped>
body, html {
  padding: 0;
  margin: 0;
}

</style>
