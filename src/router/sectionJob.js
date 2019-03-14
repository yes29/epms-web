const route = [
  {// 部门工作 --> 组
    path: '/group',
    name: 'group',
    component: resolve => { require(['@/views/sectionJob/group/index.vue'], resolve) }
  }, { // 部门工作 --> 归档事项
    path: '/file-end',
    name: 'fileEnd',
    component: resolve => { require(['@/views/sectionJob/fileEnd/index.vue'], resolve) }
  }, {// 部门工作 --> 部门文件库
    path: '/file-sys',
    name: 'fileSys',
    component: resolve => { require(['@/views/sectionJob/fileSys/index.vue'], resolve) }
  }
]
export default route
