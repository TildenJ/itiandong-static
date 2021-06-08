KEEP.initLazyLoad = () => {
  window.lazyLoadInstance = new LazyLoad({
    elements_selector: '.article-content img',
    callback_loaded: function (el) {
      el.parentNode.nodeName.toLowerCase() === 'a' || mediumZoom(
        el, {margin: 5, background: 'var(--overlay-background-color)'});
    }
  });
}
