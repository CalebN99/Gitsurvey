<template>
  <div id="app">
    <nav class="navBar">Home</nav>
    <div class="landingCheck"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
 
 
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
nav {
    height: 50px;
    border-bottom: 2px solid gray;
}

.landingCheck {
    width: 60vw;
    height: 35vw;
    border: 1px solid gray;
    background-color: gray;
    margin: 0 auto;
    margin-top: 5vw;
}
</style>