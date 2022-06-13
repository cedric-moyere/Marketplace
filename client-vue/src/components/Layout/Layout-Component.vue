<template>
  <div :style="{ height: 'auto', overflow: 'auto' }">
    <div className="fixed-top">
      <HeaderCmp></HeaderCmp>
      <NavCmp></NavCmp>
    </div>
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavCmp from './Nav-Component.vue';
import HeaderCmp from './Header-Component.vue';

export default {
  components: {
    HeaderCmp,
    NavCmp
  }
};
</script>

