import { currentTime } from "./time.mjs";
import { settings } from "./settings.mjs";
// import { getPoints } from "./points.mjs";
import { toggleSettings, appendText } from "./pageManipulationTry.mjs";

$(function () {
  // getPoints();
  currentTime();
  settings();
  toggleSettings();
  appendText();
  //$(".tutorial-content").remove();
});
