<template>
  <section class="section">
    <div class="container">
      <loader v-if="!memes"></loader>
      <div class="columns is-multiline" v-else-if="memes">
        <div class="column is-12">
          <h1>GET MEMES</h1>
        </div>
        <div class="column is-12">
          <form>
              <input class="input" type="text" name="memes" value="" />
              <button class="button is-info">Refresh the page!</button>
          </form>
        </div>
        <div v-for="meme in memes" :key="meme.id" class="column is-3">
          <p>{{meme.name}}</p>
          <img :src="meme.url" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//imports and exports.
import Loader from './Loader';
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    Loader
  },
  //basically state?
  data() {
    return {
      memes: null
    };
  },

  //like componentDidMount
  mounted() {
    axios
    .get('https://api.imgflip.com/get_memes',{

    })
    .then((res) => {
      this.memes = res.data.data.memes;
      console.log(this.memes);
    });
  },
};
</script>

<style>
</style>
