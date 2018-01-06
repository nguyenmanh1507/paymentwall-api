class Tab {
  constructor(el = '') {
    if (el.length === 0) {
      throw Error('You missing target element')
    }

    this.index = null
    this.currentTab = ''

    this.el = document.querySelector(el)
    this.tabList = this.el.querySelector('[data-tab="tabs"]')
    this.tabLink = this.el.querySelectorAll('[data-tab="tab"]')
    this.tabPane = this.el.querySelectorAll('[data-tab="pane"]')
  }

  init() {
    this.el.addEventListener('click', e => {
      if (e.target && e.target.nodeName == 'A') {
        this.tabPane.forEach(pane => {
          if (pane.getAttribute('id') == this.currentTab) {
            pane.classList.add('is-active')
            return
          }

          pane.classList.remove('is-active')
        })
      }
    })

    this.tabList.addEventListener('click', e => {
      if (e.target && e.target.nodeName == 'A') {
        this.tabLink.forEach((link, index) => {
          if (link.getAttribute('data-tab-index') === this.index) {
            return
          }

          link.classList.remove('is-active')
        })
      }
    })

    this.tabLink.forEach((link, index) => {
      link.setAttribute('data-tab-index', index)
      link.addEventListener('click', e => {
        e.preventDefault()
        this.index = link.getAttribute('data-tab-index')
        this.currentTab = link.getAttribute('href').slice(1)
        link.classList.add('is-active')
      })
    })
  }
}
