// event klik link

$(".scroll").on("click", function (e) {
  //ambil isi href
  var tujuan = $(this).attr("href");

  //tangkap elemen
  var elementujuan = $(tujuan);

  //scrroll
  $("html").animate(
    {
      scrollTop: elementujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

//paralax
// about
$(window).on("load", function () {
  $(".pkiri").addClass("pmuncul");
  $(".pkanan").addClass("pmuncul");
});

$(window).scroll(function () {
  var wscroll = $(this).scrollTop();

  //jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px," + wscroll / 10 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px," + wscroll / 3 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px," + wscroll / 1.5 + "%)",
  });

  //portofolio
  if (wscroll > $(".portofolio").offset().top - 250) {
    //console.log("ok");
    $(".portofolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portofolio .thumbnail").eq(i).addClass("tampil");
      }, 300 * (i + 1));
    });
  }
});
