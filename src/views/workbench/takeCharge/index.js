/**
 * desc:负责项目看板
 * @author: yeSong
 * @date:   2018-06-19
 */
import OptPanel from '@/components/optPanel/index.vue'
export default {
  components: {OptPanel},
  data () {
    return {
      options: {
        group: 'mission'
      },
      list1: [
        { name: 'Mission', id: 1 },
        { name: 'Mission', id: 2 },
        { name: 'Mission', id: 3 },
        { name: 'Mission', id: 4 }
      ],
      list2: [
        { name: 'Mission', id: 5 },
        { name: 'Mission', id: 6 },
        { name: 'Mission', id: 7 }
      ],
      list3: [
        { name: 'Mission', id: 8 },
        { name: 'Mission', id: 9 },
        { name: 'Mission', id: 10 }
      ]
    }
  }
}
