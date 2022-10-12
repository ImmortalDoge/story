import {
  prologue,
  // chapterFirst,
  // firstChoice1,
  // firstChoice2,
  // secondChoice1,
  // secondChoice2,
} from "./plotTry.mjs";

let paragraph = 0;
let chapter = 0;
const chapters = [
  prologue,
  // chapterFirst,
  // firstChoice1,
  // firstChoice2,
  // secondChoice1,
  // secondChoice2,
];

const toggleSettings = () => {
  $(".container")
    .eq(1)
    .on("dblclick", () => {
      $("#navbar").css("width", "100%");
    });
  $(".closeBtn").on("click", () => {
    $("#navbar").css("width", "0%");
  });
};

const addSimpleText = () => {
  $(".text").append(`<p>${chapters[chapter][paragraph]}</p>`);
  paragraph++;
};

const autoScrolling = () => {
  const text = document.getElementById("text");
  const scroll = text.scrollHeight;
  $(".text").scrollTop(scroll);
};

const addChoices = () => {
  $(".text").off("click");

  let choices = chapters[chapter][paragraph];
  console.log(choices);
  $(".text").append(`<p>1. ${choices[1]}</p>`);
  $(".text").append(`<p>2. ${choices[2]}</p>`);
  $(".choices input").prop("disabled", false);
  $(".choices input").on("click", () => {
    $(".choices input").prop("disabled", true);

    $(document.activeElement).attr("value") === "1"
      ? chapter++
      : (chapter += 2);

    paragraph = 0;
    console.log(chapter);
    //console.log(chapters[chapter][paragraph]);

    $(".text").on("click", appendText());
  });
};

const theEnd = () => {
  $(".text p").remove();
  $(".text")
    .text("That's all Folks!")
    .css({ "font-size": "48px", "text-align": "center" });
};

const appendText = () => {
  $(".text").click(() => {
    // console.log(paragraph);
    console.log(chapters[chapter].length);
    if (paragraph === chapters[chapter].length) {
      return theEnd();
    } else if (Object.keys(chapters[chapter][paragraph]).length === 2) {
      return addChoices();
    } else {
      addSimpleText();
      autoScrolling();
    }
  });
};

export { toggleSettings, appendText };
