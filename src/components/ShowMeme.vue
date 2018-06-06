<template>
  <section class="section">
    <router-link :to="'/'" class="navbar-item">
      Return to the memes
    </router-link>
    <label for="text0">Top Text:</label>
    <input name="text0" v-model="currentInputs.text0" placeholder="Top Text"/>
    <label for="text1">Bottom Text:</label>
    <input name="text1" v-model="currentInputs.text1" placeholder="Bottom Text"/>
    <button v-on:click="getMeme()">Generate this meme</button>
    <p>Current meme template: {{ currentMemeName }}</p>
    <p>Current top text: {{ currentInputs.text0 }}</p>
    <p>Current bottom text: {{ currentInputs.text1 }}</p>
    <img :src="currentMeme.url"/>
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

<style>
</style>
