/**
 * desc:导航组件
 * @author: yeSong
 * @date:   2018-06-16
 */
import NavData from './navData'
export default {
  name: 'tdNav',
  data () {
    return {
      active: '',
      navTitle: '部门工作',
      chdData: Array,
      navData: Array
    }
  },
  mounted () {
    this.navData = NavData
    // 设置导航状态
    this.setStatus()
  },
  methods: {
    // 设置状态
    async setStatus () {
      let active = this.util.getLocal('navActive')
      if (!active) active = 'takeCharge'
      let item = this.util.getObjLocal('navChdData')
      this.chdData = NavData[0].node
      this.navTitle = NavData[0].name
      if (item) {
        let list = item.node
        for (let k of list) {
          let child = k.node
          if (child) {
            for (let ck of child) {
              if (active === ck.path) {
                k.isOpen = true
              }
            }
          }
        }
        this.chdData = list
        this.navTitle = item.name
      }
      this.active = active
    },
    // 打开关闭下拉
    cliOpen (chdData, item) {
      if (!item.node) {
        this.cliSelect(item.path)
        return
      }
      let arr = []
      for (let k of chdData) {
        if (k.id === item.id) {
          let isOpen = true
          if (item.isOpen) {
            isOpen = false
          }
          k.isOpen = isOpen
        } else {
          k.isOpen = false
        }
        arr.push(k)
      }
      this.chdData = arr
    },
    // 点击工作台、部门工作、管理员
    cliNav (item) {
      this.util.setObjLocal('navChdData', item)
      this.cliSelect(item.node[0].node[0].path)
      this.setStatus()
    },
    // 进入选中的导航
    cliSelect (path) {
      this.active = path
      this.util.setLocal('navActive', path)
      this.$router.push({ name: path })
    }
  }
}
