const route = [
  {// 架构设置
    path: '/frame',
    name: 'frame',
    component: resolve => { require(['@/views/systemOps/frame/index.vue'], resolve) }
  }, {// 人员设置
    path: '/crew',
    name: 'crew',
    component: resolve => { require(['@/views/systemOps/crew/index.vue'], resolve) }
  }, {// 阶段设置
    path: '/phase',
    name: 'phase',
    component: resolve => { require(['@/views/systemOps/phase/index.vue'], resolve) }
  }, {// 标签设置
    path: '/label',
    name: 'label',
    component: resolve => { require(['@/views/systemOps/label/index.vue'], resolve) }
  }, {// 成员设置
    path: '/member',
    name: 'member',
    component: resolve => { require(['@/views/systemOps/member/index.vue'], resolve) }
  }, {// 分组设置
    path: '/packet',
    name: 'packet',
    component: resolve => { require(['@/views/systemOps/packet/index.vue'], resolve) }
  }
]
export default route
