
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: "home", component: () => import('pages/Index.vue') },
      { path: '/test', name: 'testing', component: () => import('pages/Prueba.vue') },
      { path: '/productos', name: 'productos', component: () => import('pages/productos/ProductosIndex.vue') },
      { path: '/productos/agregar', name: 'productosAgregar', component: () => import('pages/productos/ProductosAgregar.vue') },
      // Alumnos
      { path: '/alumnos', name: 'alumnos', component: () => import('pages/alumnos/AlumnosIndex.vue') },
      { path: '/alumnos/agregar', name: 'alumnosAgregar', component: () => import('pages/alumnos/AlumnosAgregar.vue') },
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
