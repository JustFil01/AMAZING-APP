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
    .get('https://api.imgflip.com/caption_image?template_id=93895088&username=amazing-app-team&password=amazing-app-team&text0=text%20for%20text%20field%201&text1=text%20for%20text%20field%202',{

    })
    .then((res) => {
      this.memes = res.data;
      console.log(res.data);
    });
  },
};
</script>

<style>
</style>
