<template>
  <section class="section">
    <form>
      <input v-model="currentInputs.text0" placeholder="Top Text"/>
      <input v-model="currentInputs.text1" placeholder="Bottom Text"/>
      <button>Generate this meme</button v-on:click="getMeme()">
    </form>
    <p>Current top text: {{ currentInputs.text0 }}</p>
    <p>Current top text: {{ currentInputs.text1 }}</p>
    <img :src="currentMeme.url"/>
  </section>
</template>
<script>

import axios from 'axios';
export default {
  name: 'NewMeme',

  data() {
    return {
      currentMeme: '',
      currentInputs: {
        template_id: 93895088,
        text0: '',
        text1: ''
      },
      getMeme() {
        console.log('generating a new meme');
        axios
        .get(`https://api.imgflip.com/caption_image?template_id=${this.currentInputs.template_id}&username=amazing-app-team&password=amazing-app-team&text0=${this.currentInputs.text0}&text1=${this.currentInputs.text1}`)
        .then((res) => {
          this.currentMeme = res.data.data;
          console.log(res.data.data);
        });
      }
    };
  },

  mounted() {
    axios
    .get(`https://api.imgflip.com/caption_image?template_id=${this.currentInputs.template_id}&username=amazing-app-team&password=amazing-app-team&text0=${this.currentInputs.text0}&text1=${this.currentInputs.text1}`)
    .then((res) => {
      this.currentMeme = res.data.data;
      console.log(res.data.data);
    });
  },

};
</script>

<style>
</style>
