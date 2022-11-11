export default [
  {
    component: () => import( /* webpackChunkName: "class.venue" */ './page'),
    name: 'class.venue',
    path: '/drama-classes-by-venue/:venue'
  }
]
