<template>
  <section class="section">
    <div class="container">
      <loader v-if="!memes"></loader>
      <div class="columns is-multiline" v-else-if="memes">
        <div class="column is-12">
          <h1>GET THE LATEST HOT MEMES</h1>
        </div>
        <div class="column is-12">
          <form>
              <input class="input" type="text" v-model="search"/>
          </form>
        </div>
          <div class="memewrapper columns is-12 is-multiline">
          <div class="memebox column is-3" v-for="meme in filteredList">
            <div class="card">
              <router-link :to="'/meme/' + meme.id" class="navbar-item">
                <p>{{meme.name}}</p>
              <img :src="meme.url" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//imports and exports.
import Loader from './Loader';
import axios from 'axios';
class Post {
  constructor(height, id, url, name, width) {
    this.height = height;
    this.id = id;
    this.url = url;
    this.name = name;
    this.width = width;
  }
}
export default {
  name: 'Home',
  components: {
    Loader
  },
  //basically state?
  data() {
    return {
      search: '',
      memes: '',
    };
  },
  computed: {
    filteredList() {
      if(!this.memes) return null;
      (console.log(this.search));
      return this.memes.filter(meme => {
        // (console.log(meme.name));
        return meme.name.toLowerCase().includes(this.search.toLowerCase())
      })
      }
    },
  //like componentDidMount
  mounted() {
    axios
    .get('https://api.imgflip.com/get_memes',{

    })
    .then((res) => {
      this.memes = res.data.data.memes;
    });
  },
};
</script>

<style>
</style>
