class Nav {
  constructor(nav = '', trigger = '') {
    if (!nav.length || !trigger.length) {
      throw Error('Error happen')
    }

    this.nav = document.querySelector(nav)
    this.trigger = document.querySelector(trigger)
    this.closeBtn = this.nav.querySelector('[data-nav="close"]')
  }

  _listenToShowNav() {
    this.trigger.addEventListener('click', e => {
      this.nav.classList.add('is-active')
      document.body.style.overflow = 'hidden'
    })
  }

  _listenToHideNav() {
    this.closeBtn.addEventListener('click', e => {
      this.nav.classList.remove('is-active')
      document.body.style.overflow = 'unset'
    })
  }

  init() {
    this._listenToShowNav()
    this._listenToHideNav()
  }
}
