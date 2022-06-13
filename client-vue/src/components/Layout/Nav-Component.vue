<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
          <li v-for="link in links" v-bind:key="link" class="nav-item">
            <router-link class="nav-link" :to="{ name: link.name }">{{ link.label }}</router-link>
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Nav-component',
  setup() {
    const store = useStore();
    const current = ref({});
    const links = [
      { name: 'GalleryComponent', label: 'Home' },
      { name: 'AboutComponent', label: 'About' }
    ];
    const cartQuantity = computed(() => store.getters.cartQuantity);

    return { current, links, cartQuantity };
  }
});
</script>

