<template>
  <div class="container" style="margin-top: 130px">
    <section class="padding-bottom mt-5">
      <div class="card card-deal">
        <div class="col-heading content-body">
          <header class="section-heading">
            <h3 class="section-title">Deals and offers</h3>
          </header>
          <div class="timer">
            <div>
              <span class="num">{{ hours }}</span> <small>hours</small>
            </div>
            <div>
              <span class="num">{{ min }}</span> <small>minutes</small>
            </div>
            <div>
              <span class="num">{{ sec }}</span> <small>seconds</small>
            </div>
          </div>
        </div>
        <div class="row no-gutters items-wrap">
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title"> Summer clothes </a>
                <span class="badge badge-danger"> -20% </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title"> Some category </a>
                <span class="badge badge-danger"> -5% </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title"> Another category </a>
                <span class="badge badge-danger"> -20% </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title"> Home apparel </a>
                <span class="badge badge-danger"> -15% </span>
              </div>
            </figure>
          </div>
          <div class="col-md col-6">
            <figure class="card-product-grid card-sm">
              <a href="#" class="img-wrap">
                <img src="" />
              </a>
              <div class="text-wrap p-3">
                <a href="#" class="title text-truncate"> Smart watches </a>
                <span class="badge badge-danger"> -10% </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-3 mb-5">
      <header class="section-heading mb-5">
        <h3 class="title-section">Products</h3>
      </header>
      <div class="row">
        <p v-if="isLoading" style="marginLeft: 18, fontSize: 18">Loading...</p>
        <div v-if="products">
          <div v-for="product in products" v-bind:key="product">
            <Product :key="product._id + product.name" :product="product" />
          </div>
        </div>
        <p v-else style="marginLeft: 18, fontSize: 18">No Listing available ...</p>
      </div>
      <div class="clearfix"></div>
    </section>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { defineComponent } from '@vue/composition-api';
import Product from './Product-Component.vue';

export default defineComponent({
  name: 'Gallery-Component',
  components: { Product },
  setup() {
    const checkSingleDigit = digit => {
      return ('0' + digit).slice(-2);
    };
    let hours = ref(null),
      min = ref(null),
      sec = ref(null);
    onMounted(() => {
      setInterval(() => {
        const date = new Date();
        hours.value = date.getHours();
        min.value = checkSingleDigit(date.getMinutes());
        sec.value = checkSingleDigit(date.getSeconds());
      }, 1000);
    });
    const isLoading = false;
    const products = [
      { _id: '10', price: 20, category: 'vetements', name: 'Veste' },
      { _id: '20', price: 20, category: 'vetements', name: 'Pantalon' },
      { _id: '11', price: 20, category: 'vetements', name: 'Veste' },
      { _id: '21', price: 20, category: 'vetements', name: 'Pantalon' },
      { _id: '12', price: 20, category: 'vetements', name: 'Veste' },
      { _id: '22', price: 20, category: 'vetements', name: 'Pantalon' }
    ];
    return { isLoading, products, hours, min, sec };
  }
});
</script>
