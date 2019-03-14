(function () {
  /* eslint-disable */
  etpl.config({
    commandOpen: '<%',
    commandClose: '%>'
  })
  let URL = window.UMEDITOR_HOME_URL || (function () {
    function PathStack () {
      this.documentURL = self.document.URL || self.location.href
      this.separator = '/'
      this.separatorPattern = /\\|\//g
      this.currentDir = './'
      this.currentDirPattern = /^[.]\/]/

      this.path = this.documentURL
      this.stack = []
      this.push(this.documentURL)
    }
    PathStack.isParentPath = function (path) {
      return path === '..'
    }
    PathStack.hasProtocol = function (path) {
      return !!PathStack.getProtocol(path)
    }
    PathStack.getProtocol = function (path) {
      let protocol = /^[^:]*:\/*/.exec(path)
      return protocol ? protocol[0] : null
    }
    PathStack.prototype = {
      push: function (path) {
        this.path = path
        update.call(this)
        parse.call(this)
        return this
      },
      getPath: function () {
        return this + ''
      },
      toString: function () {
        return this.protocol + (this.stack.concat([''])).join(this.separator)
      }
    }
    function update () {
      let protocol = PathStack.getProtocol(this.path || '')
      if (protocol) {
        this.protocol = protocol
        this.localSeparator = /\\|\//.exec(this.path.replace(protocol, ''))[0]
        this.stack = []
      } else {
        protocol = /\\|\//.exec(this.path)
        protocol && (this.localSeparator = protocol[0])
      }
    }
    function parse () {
      let parsedStack = this.path.replace(this.currentDirPattern, '')
      if (PathStack.hasProtocol(this.path)) {
        parsedStack = parsedStack.replace(this.protocol, '')
      }
      parsedStack = parsedStack.split(this.localSeparator)
      parsedStack.length = parsedStack.length - 1
      for (let i = 0, tempPath, l = parsedStack.length, root = this.stack; i < l; i++) {
        tempPath = parsedStack[i]
        if (tempPath) {
          if (PathStack.isParentPath(tempPath)) {
            root.pop()
          } else {
            root.push(tempPath)
          }
        }
      }
    }
    let currentPath = document.getElementsByTagName('script')
    currentPath = currentPath[ currentPath.length - 1 ].src
    return new PathStack().push(currentPath) + ''
  })()
  window.UMEDITOR_CONFIG = {
    UMEDITOR_HOME_URL: 'http://ueditor.baidu.com/umeditor/',
    imageUrl: URL + 'asp/imageUp.asp',
    imagePath: URL + 'asp/',
    imageFieldName: 'upfile',
    toolbar: ['source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
      'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
      '| justifyleft justifycenter justifyright justifyjustify |',
      'link unlink | emotion image video  | map',
      '| horizontal print preview fullscreen', 'drafts', 'formula'
    ],
    filterRules: {},
    xssFilterRules: true,
    inputXssFilter: true,
    outputXssFilter: true,
    whiteList: {
      a: ['target', 'href', 'title', 'style', 'class', 'id'],
      abbr: ['title', 'style', 'class', 'id'],
      address: ['style', 'class', 'id'],
      area: ['shape', 'coords', 'href', 'alt', 'style', 'class', 'id'],
      article: ['style', 'class', 'id'],
      aside: ['style', 'class', 'id'],
      audio: ['autoplay', 'controls', 'loop', 'preload', 'src', 'style', 'class', 'id'],
      b: ['style', 'class', 'id'],
      bdi: ['dir'],
      bdo: ['dir'],
      big: [],
      blockquote: ['cite', 'style', 'class', 'id'],
      br: [],
      caption: ['style', 'class', 'id'],
      center: [],
      cite: [],
      code: ['style', 'class', 'id'],
      col: ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
      colgroup: ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
      dd: ['style', 'class', 'id'],
      del: ['datetime', 'style', 'class', 'id'],
      details: ['open', 'style', 'class', 'id'],
      div: ['style', 'class', 'id'],
      dl: ['style', 'class', 'id'],
      dt: ['style', 'class', 'id'],
      em: ['style', 'class', 'id'],
      embed: ['style', 'class', 'id', '_url', 'type', 'pluginspage', 'src', 'width', 'height', 'wmode', 'play', 'loop', 'menu', 'allowscriptaccess', 'allowfullscreen'],
      font: ['color', 'size', 'face', 'style', 'class', 'id'],
      footer: ['style', 'class', 'id'],
      h1: ['style', 'class', 'id'],
      h2: ['style', 'class', 'id'],
      h3: ['style', 'class', 'id'],
      h4: ['style', 'class', 'id'],
      h5: ['style', 'class', 'id'],
      h6: ['style', 'class', 'id'],
      header: ['style', 'class', 'id'],
      hr: ['style', 'class', 'id'],
      i: ['style', 'class', 'id'],
      iframe: ['style', 'class', 'id', 'src', 'frameborder', 'data-latex'],
      img: ['src', 'alt', 'title', 'width', 'height', 'style', 'class', 'id', '_url'],
      ins: ['datetime', 'style', 'class', 'id'],
      li: ['style', 'class', 'id'],
      mark: [],
      nav: [],
      ol: ['style', 'class', 'id'],
      p: ['style', 'class', 'id'],
      pre: ['style', 'class', 'id'],
      s: [],
      section: [],
      small: ['style', 'class', 'id'],
      span: ['style', 'class', 'id'],
      sub: ['style', 'class', 'id'],
      sup: ['style', 'class', 'id'],
      strong: ['style', 'class', 'id'],
      table: ['width', 'border', 'align', 'valign', 'style', 'class', 'id'],
      tbody: ['align', 'valign', 'style', 'class', 'id'],
      td: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
      tfoot: ['align', 'valign', 'style', 'class', 'id'],
      th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
      thead: ['align', 'valign', 'style', 'class', 'id'],
      tr: ['rowspan', 'align', 'valign', 'style', 'class', 'id'],
      tt: ['style', 'class', 'id'],
      u: [],
      ul: ['style', 'class', 'id'],
      svg: ['style', 'class', 'id', 'width', 'height', 'xmlns', 'fill', 'viewBox'],
      video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'style', 'class', 'id']
    }
  }
})()
