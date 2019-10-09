$("html").click(a => {
  if (a.target.id == "menu") {
    $(".menuList").show();
  } else {
    $(".menuList").hide();
  }
});
