<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h1>GET MEMES</h1>
        </div>
        <div class="column is-12">
          <form>
              <input class="input" type="text" v-model="search"/>

              <button class="button is-info">Refresh the page!</button>
          </form>

          <div class="card" v-for="meme in filteredList">
            <p>{{meme.name}}</p>
          </div>

            <div v-for="meme in memes" :key="meme.id">
              <p>{{meme.name}}</p>
              <img :src="meme.url" />
            </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
//imports and exports.
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
  //basically state?
  data() {
    return {
      search: '',
      memes: '',
    };
  },
  computed: {
    filteredList() {
      if(!this.memes )
      return null;
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
