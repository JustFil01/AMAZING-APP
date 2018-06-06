<template>
  <section class="section">
    <div class="container">
      <form  v-on:submit.prevent="handleSubmit()">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" name="name" placeholder="Text name" v-model="venue.name">
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <Autocomplete name="address" v-bind:handle-place-change="handlePlaceChange"/>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="text" name="description" placeholder="Text description" v-model="venue.description">
          </div>
        </div>
        <div class="field">
          <label class="label">Image</label>
          <div class="control">
            <input class="input" type="text" name="image" placeholder="Text image" v-model="venue.image">
          </div>
        </div>
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Autocomplete from './Autocomplete';
export default {
  name: 'VenueNew',
  data() {
    return {
      venue: {}
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post('/api/venues', this.venue)
        .then(() => this.$router.push('/venues'));
    },
    handlePlaceChange({ formatted_address: address, geometry: { location } }) {
      this.venue.address = address;
      this.venue.location = location.toJSON();
    }
  },
  components: {
    Autocomplete
  }
};
</script>
<style>

</style>
