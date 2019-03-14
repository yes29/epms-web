const route = [
  {// 负责项目看板
    path: '/take-charge',
    name: 'takeCharge',
    component: resolve => { require(['@/views/workbench/takeCharge/index.vue'], resolve) }
  }, {// 参与项目看板
    path: '/participation',
    name: 'participation',
    component: resolve => { require(['@/views/workbench/participation/index.vue'], resolve) }
  }, {// 待处理流转
    path: '/follow-up',
    name: 'followUp',
    component: resolve => { require(['@/views/workbench/followUp/index.vue'], resolve) }
  }, {// 已处理流转
    path: '/processed',
    name: 'processed',
    component: resolve => { require(['@/views/workbench/processed/index.vue'], resolve) }
  }, {// 消息通告
    path: '/information',
    name: 'information',
    component: resolve => { require(['@/views/workbench/information/index.vue'], resolve) }
  }
]
export default route
