<template>
  <header class="header">
    <h3>Your<span> Wall</span></h3> 
    <div class="bottom-line"></div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact Us</router-link>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
    name: "Header",
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&display=swap');
  
  .header{
    padding-bottom: 1.5rem;
    background: #fff;
    color: #333;
    text-align: center;
    padding-top: 10px;


    h3 {
      font-family: 'Noto Serif', serif;
      font-size: 4.5rem;
      
      span {
        color: #ff7c92;
      }
    }

    a {
      color: #333;
      text-decoration: none;
      padding: .5rem 1.5rem;
      border-bottom: 2px transparent solid;
      transition: border-color 0.5s;

      &:hover {
        border-color: #ff7c92;
      }
    }
      
  }

  .bottom-line {
    height: 1px;
    width: 20rem;
    background: #333;
    display: block;
    margin: .5rem auto 1rem auto;
  }

  @media (max-width: 800px) {
    .header {
      h3 {
        font-size: 3rem;
      }

      a {
        font-size: 1rem;
      }
    }
    .bottom-line {
      width: 17rem;
    }
  }
</style>