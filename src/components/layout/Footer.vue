<template>
  <footer class="main-footer">
    <p>
      Copyright &copy; 2020, All Rights reserved.
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component({
    name: "Footer",
})
export default class Footer extends Vue{}
</script>

<style scoped lang="scss">
  .main-footer {
    text-align: center;
    background: #fff;
    color: #444;
    padding: 20px;
  }
</style>