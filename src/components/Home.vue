<template>
  <section class="section">
    <div class="container">
      <loader v-if="!memes"></loader>
      <div class="columns is-multiline" v-else-if="memes">
        <div class="column is-12">
          <h1>😂💯👏🔥MAYMAY G3N3R8R🔥👏💯😂</h1>
        </div>
        <div class="column is-12">
          <form>
            <span><i class="fas fa-search"></i></span>
            <input class="input" type="text" v-model="search" placeholder="Search..." autofocus="autofocus" />
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

<style scoped>

h1 {
  text-align: center;
  font-family: 'impact', sans-serif;
  font-size: 72px;
  animation: flash 2s infinite;
  height: 100px;
}

@keyframes flash {
    0%   {
      color: red;
      font-size: 80px;
    }
    25%  {
      color: yellow;
      font-size: 72px;
    }
    50%  {
      color: blue;
      font-size: 80px;
    }
    75% {
      color: green;
      font-size: 72px;
    }
    100% {
      color: red;
      font-size: 80px;
    }
}

span {
  width: 30px;
  display: inline-block;
  text-align: center;
  padding-top: 5px;
}

input {
  display: inline;
  width: calc(100% - 30px)
}

/* section {
  background-image: url('https://vignette.wikia.nocookie.net/ssb/images/9/9a/Troll-face.jpg/revision/latest?cb=20141224201503');
} */

</style>
