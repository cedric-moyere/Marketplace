<template>
  <div class="col-sm-4 col-6">
    <div class="card card-product-grid">
      <a href="#" class="img-wrap">
        <img :src="imageUrl" />
      </a>
      <figcaption class="info-wrap">
        <ul class="rating-stars mb-1">
          <li style="width: 80%" class="stars-active">
            <img src="images/icons/stars-active.svg" alt="" />
          </li>
          <li>
            <img src="images/icons/starts-disable.svg" alt="" />
          </li>
        </ul>
        <div>
          <a href="#" class="text-muted">
            {{ category }}
          </a>
          <br />
          <a href="#" class="title">
            {{ name }}
          </a>
        </div>
        <div class="price h5 mt-2">{{ price }}€</div>
        <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
          <label class="btn btn-warning active">
            <input type="radio" name="options" id="option1" checked />
            <i class="fas fa-heart"></i>
          </label>
          <label class="btn btn-success">
            <input type="radio" name="options" id="option3" />
            <i class="fas fa-shopping-cart"></i>
          </label>
        </div>
      </figcaption>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ProductComponent',
  props: ['product'],
  setup(props) {
    return { ...props.product };
  }
});
</script>
