
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'catalogDefault', component: () => import('pages/Catalog.vue') },
      // { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      // { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'catalog', component: () => import('pages/Catalog.vue') },
      { path: 'chat', component: () => import('pages/Chat.vue') },
      { path: 'product/:id', component: () => import('pages/ProductCard.vue') },
      { path: 'cart', component: () => import('src/pages/Cart.vue') },
      { path: 'payment', component: () => import('components/Payment.vue') },
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
