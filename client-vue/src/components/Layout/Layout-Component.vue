<template>
  <div :style="{height: 'auto', overflow: 'auto'}">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./Nav-Component.vue";

export default {
  components: {
    Nav
  }
}
</script>