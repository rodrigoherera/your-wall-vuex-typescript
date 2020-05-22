<template>
  <div>
    <div class="container" v-if="posts && posts.length > 0">
      <div v-bind:key="post.id" v-for="post in posts">
        <PostItem v-bind:post="post"/>
      </div>
    </div>

    <div v-else>
      <p class="message">De momento no hay Posts para mostrar</p>
      <p class="message">:'(</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import posts from '@/store/modules/Post';
import PostItem from './Post.vue';

@Component({
    components: {
      PostItem
    },
    name: "PostList"
})

export default class PostList extends Vue{

  get posts() {
    return posts.posts
  }
  async created() {
    await posts.getPosts()
  }
  
}
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    margin: 4rem;
    grid-template-columns: repeat(4, 1fr);
  }

  .message {
    padding-top: 1rem;
    text-align: center;
    font-size: 2rem;
  }


  @media (max-width:1290px) {
    .container {
      display: grid;
      margin: 4rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width:960px) {
    .container {
      display: grid;
      margin: 4rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 660px){
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .message {
      font-size: 1rem;
    }
  }
</style>