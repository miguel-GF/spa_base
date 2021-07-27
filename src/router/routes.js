
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "home", component: () => import('pages/Index.vue') },
      { path: '/test', name: 'testing', component: () => import('pages/Prueba.vue') },
      { path: '/inventario', name: 'inventario', component: () => import('pages/inventario/InventarioIndex.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
