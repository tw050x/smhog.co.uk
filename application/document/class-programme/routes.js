export default [
  {
    component: () => import(/* webpackChunkName: "class.programme" */ './page'),
    name: 'class.programme',
    path: '/drama-classes-by-programme/:programme'
  }
]
