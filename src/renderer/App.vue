<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "couleur",
  components: {
    Header
  }
};
</script>

<style>
/* CSS */
</style>
