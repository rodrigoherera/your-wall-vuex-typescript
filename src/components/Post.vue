<template>
  <div class="wall">
    <article class="card">
      <p>{{post.description}}</p>
      <a><img v-bind:src="getImgUrl(post.image)"></a>
    </article>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Post } from '@/store/models';
import { Prop } from 'vue-property-decorator';

@Component({
  name: "PostItem",
})
export default class PostItem extends Vue{

  @Prop({ required: true, type: Object}) post!: Post
  
  url = "http://localhost:8888/"

  getImgUrl(pic: string) {
    try {
      return this.url+pic;
    } catch (error) {
      console.error(error);
      return "";
    }
  }
}
</script>

<style lang="scss" scoped>

  .wall {
    margin: 10px;
  }

  .card {
    position: relative;

    a {
      width: 280px;
      height: 150px;
      border: none;
      overflow: hidden;
      display: inline-block;
      cursor: pointer;
      box-shadow: 1px 5px 10px black;;
    }

    img {
      max-width: 100%;
      transition: all 0.5s;

      &:hover {
        opacity: 80%;
      }
    }

    p {
      font-size: .9rem;
    }
  }
  .detail{
    max-width: 768px;
    max-height: 768px;
    background-color: #333;
    width: 50%;
    height: 50%;
  }
</style>