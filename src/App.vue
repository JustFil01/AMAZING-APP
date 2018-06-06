<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger" v-bind:class="{ 'is-active': navIsOpen }" v-on:click="toggleNav()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active': navIsOpen }">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/venues" class="navbar-item">Venues</router-link>
          <router-link to="/venues/new" class="navbar-item">Add Venues</router-link>
        </div>
      </div>
    </nav>
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
