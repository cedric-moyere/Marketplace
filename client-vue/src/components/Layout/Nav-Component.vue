<template>
  <nav class="fixed-top navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <b>AZ-Marketplace</b>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { ref } from 'vue';

export default defineComponent({
  name: 'Nav-component',
  setup() {
    const current = ref({});
    const links = ['Home', 'About'];

    return { current, links };
  }
});
</script>

