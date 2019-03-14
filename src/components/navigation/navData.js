
let navData = [{
  id: 1,
  icon: 'icon-nav01_work',
  name: '工作台',
  node: [{
    id: 11,
    name: '工作看板',
    node: [
      {id: 111, path: 'takeCharge', name: '负责项目看板'},
      {id: 112, path: 'participation', name: '参与项目看板'}
    ]
  }, {
    id: 12,
    name: '流转事项',
    node: [
      {id: 121, path: 'followUp', name: '待处理流转'},
      {id: 122, path: 'processed', name: '已处理流转'}
    ]
  }, {
    id: 13, path: 'information', name: '消息通告'
  }]}, // 工作台 --- end ---
{  // 部门工作 --- start ---
  id: 2,
  icon: 'icon-nav01_department-work',
  name: '部门工作',
  node: [{
    id: 21,
    name: '运营产品',
    node: [
      {id: 211, path: 'group', name: '运营系统产品组'},
      {id: 213, path: 'fileEnd', name: '归档事项'},
      {id: 214, path: 'fileSys', name: '部门文件库'}
    ]
  }]
}, // 部门工作 --- end ---
{  // 管理员 --- start ---
  id: 3,
  icon: 'icon-nav01_administrator',
  name: '管理员',
  node: [{
    id: 31,
    icon: '',
    name: '运营产品',
    node: [
      {id: 311, path: 'frame', name: '架构设置'},
      {id: 312, path: 'crew', name: '人员设置'}
    ]
  }, {
    id: 32,
    icon: '',
    name: '产品部设置',
    node: [
      {id: 321, path: 'phase', name: '阶段设置'},
      {id: 322, path: 'label', name: '标签设置'},
      {id: 323, path: 'member', name: '成员设置'},
      {id: 324, path: 'packet', name: '分组设置'}
    ]
  }]
}]
export default navData
