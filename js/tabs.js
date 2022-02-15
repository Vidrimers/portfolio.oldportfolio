console.log("tabs/2022");
$(document).ready(function () {
  $('.tabs-links__item').click(function (e) {
    e.preventDefault()

    $('.tabs-links__item').removeClass('tabs-links__item--active')
    $('.tabs-content__item').removeClass('tabs-content__item--active')

    $(this).addClass('tabs-links__item--active')
    $($(this).attr('href')).addClass('tabs-content__item--active')
  })

  $('.tabs-links__item:first').click()
})