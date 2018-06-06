<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-2">{{ venue.name }}</h1>
      <h2 class="subtitle is-5">{{ venue.address }}</h2>
      <div class="columns">
        <div class="column">
          <img v-bind:src="venue.image" v-bind:alt="venue.name" />
          <div class="content">
            <p>{{ venue.description }}</p>
          </div>
        </div>
        <div class="column">
          <google-map v-bind:center="venue.location" />
        </div>
      </div>
        <router-link v-bind:to="editLink" class="button is-info" >Edit</router-link>
        <button v-on:click="handleDelete" class="button is-danger">Delete</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
export default {
  name: 'VenueShow',
  data() {
    return {
      venue: {}
    };
  },
  computed: {
    editLink() {
      return `/venues/${this.$route.params.id}/edit`;
    }
  },
  mounted() {
    axios
      .get(`/api/venues/${this.$route.params.id}`)
      .then(res => this.venue = res.data);
  },
  methods: {
    handleDelete() {
      axios
        .delete(`/api/venues/${this.$route.params.id}`)
        .then(() => this.$router.push('/venues'));
    }
  },
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.map {
  height: 250px;
}
</style>
