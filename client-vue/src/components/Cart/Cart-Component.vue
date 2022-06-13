<template>
  <div class="container" style="margin-top: 140px">
    <div class="row">
      <main class="col-md-9">
        <div class="card">
          <table class="table table-borderless table-shopping-cart">
            <thead class="text-muted">
              <tr class="small text-uppercase">
                <th scope="col">Product</th>
                <th scope="col" width="120">Quantity</th>
                <th scope="col" width="120">Price</th>
                <th scope="col" class="text-right" width="200"></th>
              </tr>
            </thead>
            <tbody>
              <div v-if="cartQuantity === 0" class="d-flex align-items-center ml-3">
                <p>Your Cart is Empty</p>
              </div>
              <tr v-else v-for="product in products" v-bind:key="product">
                <td>
                  <figure class="itemside">
                    <div class="aside">
                      <img :src="product.imageUrl" class="img-sm" />
                    </div>
                    <figcaption class="info">
                      <a href="#" class="title text-dark"> {{ product.name }} </a>
                    </figcaption>
                  </figure>
                </td>
                <td>
                  <select
                    class="form-control"
                    :value="product.quantity"
                    onChange="{updateQuantity}"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </td>
                <td>
                  <div class="price-wrap">
                    <var class="price">{{ product.price * quantity }}</var>
                  </div>
                </td>
                <td class="text-right">
                  <a
                    data-original-title="Save to Wishlist"
                    title=""
                    href=""
                    class="btn btn-light"
                    data-toggle="tooltip"
                    onClick="{addToCartAction}"
                  >
                    <i class="fa fa-heart"></i>
                  </a>
                  <a href="" class="btn btn-light btn-round" onClick="{removeFromCartAction}">
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="card-body border-top">
            <button class="btn btn-primary float-md-right">
              <router-link :to="{ name: 'GalleryComponent' }" class="text-light">
                Make Purchase <i class="fa fa-chevron-right"></i>
              </router-link>
            </button>
            <button class="btn btn-secondary float-md-right mr-2">
              <router-link :to="{ name: 'GalleryComponent' }" class="text-light">
                Continue shopping <i class="fa fa-chevron-right"></i>
              </router-link>
            </button>
          </div>
        </div>
        <div class="alert alert-success mt-3">
          <p class="icontext">
            <i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
          </p>
        </div>
      </main>
      <aside class="col-md-3">
        <div class="card mb-3">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label>Have coupon?</label>
                <div class="input-group">
                  <input type="text" class="form-control" name="" placeholder="Coupon code" />
                  <span class="input-group-append">
                    <button class="btn btn-primary">Apply</button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <dl class="dlist-align">
              <dt>SubTotal:</dt>
              <dd class="text-right">{{ total }}€</dd>
            </dl>
            <dl class="dlist-align">
              <dt>Delivery:</dt>
              <dd class="text-right">{{ deliveryCost }}€</dd>
            </dl>
            <dl class="dlist-align">
              <dt>Discount:</dt>
              <dd class="text-right">---</dd>
            </dl>
            <dl class="dlist-align">
              <dt>Total:</dt>
              <dd class="text-right h5">
                <strong>{{ (total + deliveryCost).toFixed(2) }}€</strong>
              </dd>
            </dl>
            <hr />
            <p class="text-center mb-3">
              <img src="assets/logo.png" height="26" />
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
