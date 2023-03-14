
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'login', name:'login', component: () => import('pages/Login.vue') },
      { path: 'register', name:'register', component: () => import('pages/Register.vue') },
      { path: 'catalog', component: () => import('components/Catalog.vue') },
      { path: 'cart', component: () => import('components/Cart.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
