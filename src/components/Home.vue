<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h1>GET MEMES</h1>
        </div>
        <div class="column is-12">
          <form>
              <input class="input" type="text" name="memes" value="" />
              <button class="button is-info">Refresh the page!</button>
          </form>

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
export default {
  name: 'Home',
  //basically state?
  data() {
    return {
      memes: ''
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
class Post {
  constructor(title, link, author, img) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
  }
}
const app = new Vue ({
  el: '#app',
  data: {
    search: '',
    postList : [
      //adding the meme from the get request here .
    ],
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
      }
    }
  }
})
</script>

<style>
</style>
