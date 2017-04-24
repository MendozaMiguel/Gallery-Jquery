$(function(){
  // $('.thumbnail').click(function(){
  //   $(this).addClass('selected');
  // })
  // $('.thumbnail').mouseleave(function(){
  //   $(this).removeClass('selected');
  // })

  $(".thumbnail").click(function(){
    $("img:first").attr("src",$(this).attr("src"));
    var alt = $(this).attr("alt")
    $('.titre').html(alt);

    $('.thumbnail').removeClass('selected');
    $(this).addClass('selected');
  });
});

  // $(".thumbnail").click(function(){
  //   $(this).find('img').attr('alt');
  //   $(this.inner).find('img').attr('alt', alt);
  //   $(this.title) = alt;
  // })
