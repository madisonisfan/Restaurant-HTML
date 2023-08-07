$(document).ready(function () {
  console.log("document loaded");

  $(".top-button").on({
    mouseenter: function () {
      $(this).css({
        backgroundColor: "white",
        color: "black",
      });
    },
    mouseleave: function () {
      $(this).css({
        backgroundColor: "transparent",
        color: "white",
      });
    },
  });

  $(".top-button:nth-child(2)").on({
    click: function () {
      $("#reserve-modal").show();
      $("html, body").css({
        overflow: "hidden",
        height: "100%",
      });
    },
  });

  $("#close-modal-butt").click(function () {
    $("#reserve-modal").hide();
    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });
  });
});
