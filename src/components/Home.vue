<template>
  <section class="section">
    <div class="container">
      <loader v-if="!memes"></loader>
      <div v-else-if="memes">
        <h1>😂💯👏🔥MAYMAY G3N3R8R🔥👏💯😂</h1>
        <form class="columns is-12">
          <span><i class="fas fa-search"></i></span>
          <input
            class="input"
            type="text"
            v-model="search"
            placeholder="Search..."
            autofocus="autofocus"
         />
        </form>
        <div
          :style="{ height: height + 'px' }"
          class="memewrapper columns"
        >
          <div class="memebox column is-3" v-for="meme in filteredList">
            <div class="card">
              <router-link :to="'/meme/' + meme.id" class="navbar-item link">
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
      hasLoaded: false,
      height: 0
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
    },
  },
  updated: function () {
    this.$nextTick(function () {
      if(!this.memes || this.hasLoaded) return null;
      const memeboxes = [...document.getElementsByClassName('memebox')];
      const totalHeight = memeboxes.reduce((total, meme) => total += meme.clientHeight, 0);
      console.log(totalHeight);
      this.height = totalHeight / 2.6;
      this.hasLoaded = true;
    });
  },
  watch: {
    // whenever question changes, this function will run
    search(){
      this.$nextTick(function (){
        if(!this.memes) return null;
      const memeboxes = [...document.getElementsByClassName('memebox')];
      const totalHeight = memeboxes.reduce((total, meme) => total += meme.clientHeight + 12, 0);
      console.log(totalHeight);
      this.height = totalHeight / 2.6;
    });
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
//get the total height of every card.
</script>

<style scoped>

</style>
