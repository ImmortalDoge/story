const getPoints = () => {
  let points = 0,
  choise;

  $(".choices input").on("click", () => {
    choise = $(document.activeElement).attr("value");

    const findPoints = () => {
      switch (choise) {
        case "1":
          return (points -= 2);
        case "2":
          return (points += 2);
      }
    };

    findPoints();
    $(".points p").text(`Количество очков: ${points}`);
  });
};

export { getPoints };
