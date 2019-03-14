import draggable from 'vuedraggable'
export default {
  name: 'optPanel',
  components: {draggable},
  props: {
    headerText: {
      type: String,
      default: 'Header'
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onEnd () {
      console.log(this.list)
    }
  }
}
