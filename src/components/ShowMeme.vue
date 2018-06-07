<template>
  <section class="section">
    <div class="container">
      <router-link :to="'/'">
        <button class="button is-primary">
          <i class="fas fa-long-arrow-alt-left"></i>
          &nbsp;
          Return to the memes
        </button>
      </router-link>
      <div class="inputs">
        <h1>{{ currentMemeName }}</h1>
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
      </div>
      <img :src="currentMeme.url"/>
    </div>
  </section>
</template>
<script>

import axios from 'axios';
export default {
  name: 'NewMeme',

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
}

.container {
  max-width: 1000px;
}

img {
  max-width: 1000px;
  display: block;
  margin: 0 auto;
}

.inputs {
  background-color: papayawhip;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
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
</style>
