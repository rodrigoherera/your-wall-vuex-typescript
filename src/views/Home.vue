<template>
  <div id="app">
    <AddPost />
    <PostList />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/layout/Header.vue';
import AddPost from '../components/AddPost.vue';
import PostList from '../components/PostList.vue';
import Footer from '../components/layout/Footer.vue';

@Component({
  components: {
      Header,
      AddPost,
      PostList,
      Footer,
  },
})

export default class Home extends Vue{

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    line-height: 1.4;
  }
</style>