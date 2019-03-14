<template>
  <div class="ue">
    <script id="editor" type="text/plain" ></script>
  </div>
</template>
<script>
  import './template.min.js'
  import './umeditor.min.js'
  import './umeditor.config.js'
  import './themes/default/css/umeditor.min.css'// ui组件库
  export default {
    name: 'UMEditor',
    props: {
      id: {
        type: String
      }
    },
    data () {
      return {
        editor: null
      }
    },
    mounted () {
      /* eslint-disable */
      this.editor = UM.getEditor('editor')
    },
    destoryed () {
      this.editor.destory()
    },
    methods: {
      getUMContent: function () {
        return this.editor.getContent()
      }
    }
  }
</script>
