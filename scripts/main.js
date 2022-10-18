import { currentTime } from "./time.js";
import { settings } from "./settings.js";
// import { getPoints } from "./points.mjs";
import { toggleSettings, appendText } from "./pageManipulationTry.js";

$(function () {
  // getPoints();
  currentTime();
  settings();
  toggleSettings();
  appendText();
  //$(".tutorial-content").remove();
});
