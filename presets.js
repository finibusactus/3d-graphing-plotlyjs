'use strict';

const sineGraph = {formula:"z = sin(x) + sin(y)", startNumber: "0", endNumber: "10", step: "0.1"};
const leafGraph = {formula:"z = x^3+x^2+x+1 + y^3+y^2+y+1", startNumber: "-20", endNumber: "20", step: "1"};
const fuzzySineGraph = {formula:"z = random() + sin(y-x) + cos(x+y)", startNumber: "0", endNumber: "10", step: "0.07"};
const HillGraph = {formula:"z = random(x*y)", startNumber: "0", endNumber: "100", step: "1"};
const fuzzyHillGraph = {formula:"z = random() + sin(y-x) + cos(x+y) + random(sqrt(y))", startNumber: "0", endNumber: "10", step: "0.07"};
const rippleGraph = {formula:"z = ((-e^(-x*y/1)*cos(x^2+y^2)/10)+14*log(10000/(x^2+y^2)+.01))*(cos(x^2+y^2)/10)+3*((x)-(x))*((y)-(y))", startNumber: "-3", endNumber: "3", step: "0.07"};

const dataPresets = {"Sine Graph":sineGraph, "Leaf Graph":leafGraph, "Fuzzy Sine Graph":fuzzySineGraph, 'Hill Graph':HillGraph, "Fuzzy Hill Graph":fuzzyHillGraph, 'Ripple Graph': rippleGraph};

// https://www.physicsforums.com/threads/cool-3-d-functions-for-graphing.140087/ [rippleGraph]


export {dataPresets};