export default [
  {
    component: () => import(/* webpackChunkName: "user.enquire" */ './page'),
    name: 'user.enquire',
    path: '/enquire'
  }
]
