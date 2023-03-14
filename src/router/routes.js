
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'login', name:'login', component: () => import('pages/Login.vue') },
      { path: 'register', name:'register', component: () => import('pages/Register.vue') },
      { path: 'catalog', component: () => import('pages/Catalog.vue') },
      { path: 'cart', component: () => import('components/Cart.vue') },
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
