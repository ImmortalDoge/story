const settings = () => {
  $("select#colorChange").on("change", () => {
    $("select#colorChange").val((i, value) => {
      console.log(value)
      switch (value) {
        case "vintage":
          $(".text").css({ "background-color": "#0C0C0C", color: "#00FE00" });
          break;
        case "ps":
          $(".text").css({ "background-color": "#012456", color: "#CCC" });
          break;
        case "campbell":
          $(".text").css({ "background-color": "#0C0C0C", color: "#CCC" });
          break;
        case "default":
          $(".text").css({ "background-color": "#CCC", color: "#0C0C0C" });
          break;
      }
    });
  });

  $("#timeSettings").on("click", () => {
    $("#timeSettings").prop("checked")
      ? $(".timer").css("display", "block")
      : $(".timer").css("display", "none");
  });

  $("#pointsSettings").on("click", () => {
    $("#pointsSettings").prop("checked")
      ? $(".points").css("display", "block")
      : $(".points").css("display", "none");
  });

  $("#removeSettings").on("click", () => {
    $("#removeSettings").on("click") ? $(".text p").remove() : void 0;
  });

  $("#autoScrollSettings").on("click", () => {
    $("#autoScrollSettings").prop("checked")
      ? $(".text").removeAttr("id")
      : $(".text").attr("id", "text");
  });

  // $("#music").on("click", () => {
  // })
};

export { settings };
