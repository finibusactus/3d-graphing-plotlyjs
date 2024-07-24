'use strict';

import { dataPresets } from "./presets.js";

function generateDataPoints(startNumber, endNumber, step, formula) {
  let xData = [];
  let yData = [];
  let zData = [];
  for (let n = startNumber; n <= endNumber; n += step) {
    xData.push(n);
    yData.push(n);
  }
  for (let y = startNumber; y <= endNumber; y += step) {
    let localXZData = [];
    for (let x = startNumber; x <= endNumber; x += step) {
      let scope = { x: x, y: y };
      math.evaluate(formula, scope);
      localXZData.push(scope.z);
    }
    zData.push(localXZData);
  }
  return { xData, yData, zData };
}

function plotGraph() {
  let startNumber = Number(document.getElementById("startNumber").value);
  let endNumber = Number(document.getElementById("endNumber").value);
  let step = Number(document.getElementById("step").value);
  let formula = document.getElementById("formula").value;
  let { xData, yData, zData } = generateDataPoints(startNumber, endNumber, step, formula);
  Plotly.react(graphDiv, [{ type: "surface", x: xData, y: yData, z: zData }], { uirevision: 'true' })
}

function loadDropDownPresets() {
  let option = document.getElementById('selectPresets').value;
  let data = dataPresets[option];
  document.getElementById("formula").value = data.formula;
  document.getElementById("startNumber").value = data.startNumber;
  document.getElementById("endNumber").value = data.endNumber;
  document.getElementById("step").value = data.step;
}




document.getElementById("plotButton").addEventListener("click", function (event) { plotGraph(); event.preventDefault; });
document.getElementById("selectPresets").addEventListener("click", function (event) { loadDropDownPresets(); event.preventDefault; });
Plotly.newPlot(graphDiv, [{ type: "surface", z: [[0, 1, 2, 3, 2, 1, 1], [1, 2, 4, 2, 1, 1, 1], [1, 2, 5, 2, 1, 1, 1]] }])