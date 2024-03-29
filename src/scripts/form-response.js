$(() => {
  const form = $('[data-form]');

  if (form.length !== 0) {

    form.each(function() {
      const ths = $(this)
      const id = ths.data('form')

      ths.on('submit', (e) => {
        e.preventDefault()
        $.fancybox.defaults.closeExisting = true;
        $.fancybox.defaults.touch = false;
        $.fancybox.defaults.hideScrollbar = false;
        $.fancybox.defaults.baseTpl = (
          '<div class="fancybox-container" role="dialog" tabindex="-1">' +
          '<div class="fancybox-bg"></div>' +
          '<div class="fancybox-stage"></div>' +
          '</div>'
        );
        $.fancybox.defaults.animationEffect = 'zoom'
        $.fancybox.defaults.animationDuration = 500
        $.fancybox.open($(`[data-response=${id}]`))
        ths[0].reset()
      })
    })
  }
});