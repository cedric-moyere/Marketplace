<template>
  <div :style="{ height: 'auto', overflow: 'auto' }">
    <NavCmp></NavCmp>
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavCmp from './Nav-Component.vue';

export default {
  components: {
    NavCmp
  }
};
</script>

