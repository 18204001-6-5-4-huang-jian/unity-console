import Vue from 'vue';
import Router from 'vue-router';
/* login */
const Login = () => import('@/views/login/Index');
const CheckProject = () => import('@/views/login/CheckProject');
const UpdatePassword = () => import('@/views/login/UpdatePassword');
const cancersign = () => import('@/views/cancersign/Index');

Vue.use(Router);

export const constantRouterMap = [{
    path: '/login',
    component: Login,
    redirect: '/',
    hidden: true
  },
  {
    path: '/',
    component: Login,
    hidden: true
  },
  {
    path: '/checkproject',
    component: CheckProject,
    name: '选择机构',
    hidden: true,
    meta: {
      requireAuth: 'recruitmentpoint-index-page'
    }
  },
  {
    path: '/UpdatePassword',
    component: UpdatePassword,
    name: '修改密码'
  },
  {
    path: '/cancersign',
    component: cancersign,
    name: '肿瘤登记'
  }
]
export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});