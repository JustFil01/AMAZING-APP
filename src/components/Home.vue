<template>
  <section class="section">
    <div class="container">
      <loader v-if="!memes"></loader>
      <div v-else-if="memes">
        <h1>😂💯👏🔥MAYMAY G3N3R8R🔥👏💯😂</h1>
        <form class="columns is-12">
          <span><i class="fas fa-search"></i></span>
          <input class="input" type="text" v-model="search" placeholder="Search..." autofocus="autofocus" />
        </form>
        <div class="memewrapper columns">
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
      // (console.log(this.search));
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
