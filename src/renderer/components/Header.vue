<template>
  <header>
    <h1 id="logo">Couleur</h1>
    <span>Made with 💛 by <b><a href="https://whosthebear.xyz">The Bear</a></b> | Built with <b>electron-vue & spectre.css</b></span>
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
header{
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;

  #logo{
    margin-bottom: 3px;
  }

  span{
    font-size: 10px;
    color: #999;
  }
}
</style>

