import { createWebHistory, createRouter } from 'vue-router';
import GalleryComponent from '../components/Home/Gallery-Component.vue';
import AboutComponent from '../views/AboutView.vue';
import CartComponent from '@/components/Cart/Cart-Component.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'GalleryComponent',
    component: GalleryComponent
  },
  {
    path: '/about',
    name: 'AboutComponent',
    component: AboutComponent
  },
  {
    path: '/cart',
    name: 'CartComponent',
    component: CartComponent
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

