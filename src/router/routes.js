
const routes = [
  {
    path: '/login',
    component: () => import('pages/Login.vue'),
    meta:{ requiresAuth: false },
  },
  {
    path: '/',
    name: 'mainLayout',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: "home", component: () => import('pages/Index.vue'), meta:{ requiresAuth: true }, },
      { path: '/test', name: 'testing', component: () => import('pages/Prueba.vue'), meta:{ requiresAuth: true }, },
      { path: '/productos', name: 'productos', component: () => import('pages/productos/ProductosIndex.vue'), meta:{ requiresAuth: true }, },
      { path: '/productos/agregar', name: 'productosAgregar', component: () => import('pages/productos/ProductosAgregar.vue'), meta:{ requiresAuth: true }, },
      // Alumnos
      { path: '/alumnos', name: 'alumnos', component: () => import('pages/alumnos/AlumnosIndex.vue'), meta:{ requiresAuth: true }, },
      { path: '/alumnos/agregar', name: 'alumnosAgregar', component: () => import('pages/alumnos/AlumnosAgregar.vue'), meta:{ requiresAuth: true }, },

      { path: '/calificaciones', name: 'calificaciones', component: () => import('pages/calificaciones/CalificacionesIndex.vue'), meta:{ requiresAuth: true }, },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
    meta:{ requiresAuth: false },
  }
]

export default routes
