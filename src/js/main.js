import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';
import Draw from "./components/draw";

document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelectorAll(".dot").length) {
    Draw();
  }
});
