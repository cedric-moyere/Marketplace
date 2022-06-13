<template>
  <nav class="navbar d-flex p-md-0 navbar-expand-lg navbar-light bg-light border-bottom">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTop4"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTop4">
      <ul class="navbar-nav mr-auto">
        <li>
          <span className="nav-link">
            <span v-if="!!cartQuantity">
              <button className="btn btn-danger btn-sm">logout</button>
              <span>
                <b> Hi, {{ cartQuantity.first }}</b>
              </span>
            </span>
            <span v-else>
              <router-link :to="{ name: 'GalleryComponent' }">login</router-link> or
              <router-link :to="{ name: 'GalleryComponent' }">register</router-link>
            </span>
          </span>
        </li>
        <li>
          <router-link class="nav-link" :to="{ name: 'CartComponent' }"> Deals </router-link>
        </li>
        <li>
          <router-link class="nav-link" :to="{ name: 'CartComponent' }"> Help </router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li>
          <a href="#" class="nav-link">
            <!-- <img src={`${url}images/icons/flags/US.png`} height="16" /> -->
            Ship to
          </a>
        </li>
        <li class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"> Watchlist </a>
          <ul class="dropdown-menu small">
            <li>
              <a class="dropdown-item" href="#"> First item </a>
            </li>
            <li>
              <a class="dropdown-item" href="#"> Second item </a>
            </li>
            <li>
              <a class="dropdown-item" href="#"> Third item </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="nav-link" disabled> My Orders </a>
        </li>
        <li>
          <a href="#" class="nav-link">
            <i class="fas fa-bell"></i>
          </a>
        </li>
        <li>
          <router-link class="nav-link" :to="{ name: 'CartComponent' }">
            <i class="fas fa-shopping-cart"></i>
          </router-link>
        </li>
        <li>
          <span class="badge badge-primary">{{ cartQuantity }}</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Header-Component',
  setup() {
    const store = useStore();
    const cartQuantity = computed(() => store.getters.cartQuantity);
    const current = computed(() => store.getters.user);

    return { cartQuantity, current };
  }
});
</script>

