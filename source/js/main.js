(function () {
  hljs.initHighlightingOnLoad()

  const d = document

  if (d.getElementById('tab')) {
    const tab = new Tab('#tab')
    tab.init()
  }

  if (d.getElementById('code-block-tab')) {
    const codeBlockTab = new Tab('#code-block-tab')
    codeBlockTab.init()
  }

  if (d.getElementById('hamburger') && d.getElementById('sidenav')) {
    new Nav('#sidenav', '#hamburger').init()
  }
})()
