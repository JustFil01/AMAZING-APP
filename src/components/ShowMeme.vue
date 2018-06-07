<template>
  <section class="section">
    <div class="container">
      <div class="left-text">
        <router-link :to="'/'">
          <button class="button is-primary">
            <i class="fas fa-long-arrow-alt-left"></i>
            &nbsp;
            Return to the memes
          </button>
        </router-link>
        <div class="inputs">
          <h2>{{ currentMemeName }}</h2>
          <div>
            <label for="text0" class="label">Top Text: </label>
            <div class="control">
              <input class="input" name="text0" v-model="currentInputs.text0" placeholder="Top Text"/>
            </div>
          </div>
          <div>
            <label for="text1" class="label">Bottom Text: </label>
            <div class="control">
              <input class="input" name="text1" v-model="currentInputs.text1" placeholder="Bottom Text"/>
            </div>
          </div>
          <button class="button is-success" v-on:click="getMeme()">Generate this meme</button>
          <p class="image-link" v-if="currentMeme.url">
            Direct image link:
            <loader v-if="!currentMeme.url">whatever</loader>
            <a :href="currentMeme.url">{{ currentMeme.url }}</a>
          </p>
        </div>
      </div>
      <div class="right-image">
        <div v-if="!currentMeme.url" class="loader-div">
          <loader></loader>
        </div>
        <img :src="currentMeme.url"/>
      </div>
    </div>
  </section>
</template>
<script>

import Loader from './Loader';
import axios from 'axios';
export default {
  name: 'NewMeme',
  components: {
    Loader
  },
  data() {
    return {
      currentMeme: {
        url: ''
      },
      currentMemeName: '',
      currentMemeRequestURL: '',
      currentInputs: {
        template_id: this.$route.params.id,
        text0: '',
        text1: ''
      }
    };
  },

  methods: {
    getMeme() {
      this.currentMeme.url = '';
      axios
        .post(`https://api.imgflip.com/caption_image?template_id=${
          this.currentInputs.template_id
        }&username=amazing-app-team&password=amazing-app-team&text0=${
          this.currentInputs.text0
        }&text1=${
          this.currentInputs.text1
        }`)
        .then(res => {
          this.currentMeme = res.data.data;
        });
      axios
        .get('https://api.imgflip.com/get_memes')
        .then(res => {
          res.data.data.memes.forEach(meme => {
            if (meme.id === this.currentInputs.template_id.toString()) {
              this.currentMemeName = meme.name;
            }
          });
        });
    }
  },

  mounted() {
    axios
      .get('https://api.imgflip.com/get_memes')
      .then(res => {
        res.data.data.memes.forEach(meme => {
          if (meme.id === this.currentInputs.template_id.toString()) {
            this.currentMemeName = meme.name;
            this.currentMeme.url = meme.url;
          }
        });
      });
  }

};
</script>

<style scoped>

section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
}

.left-text {
  float: left;
  width: 30%;
}

.right-image {
  float: right;
  width: 70%;
  max-height: 100vh;
  min-height: 80vh;
}

.container {
  max-width: 1000px;
}

img {
  max-width: 80%;
  display: block;
  margin: 0 auto;
  padding-top: 10%;
}

.inputs {
  background-color: papayawhip;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  width: 100%;
}

h2 {
  text-align: center;
  font-size: 36px;
  text-decoration: underline;
  font-family: 'impact', sans-serif;
}

button {
  display: block;
  margin: 20px auto;
}

div {
  padding-top: 10px;
}

.image-link {
  text-align: center;
}

.loader-div {
  width: 100%;
  text-align: center;
  padding-top: 30%;
}

</style>
