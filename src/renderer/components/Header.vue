<template>
  <header class="toast">
    <h1 id="logo">Couleur</h1>
    <p>
      A simple electron.js app for keeping your temporary palettes made with 💛 by
      <a
        href="https://whosthebear.xyz"
      >The Bear</a>
    </p>
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
  padding-bottom: 20px;
}

.toast{
  border-radius: 0;
  text-align: center;
}
</style>

