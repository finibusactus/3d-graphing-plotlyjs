# A slow but useful grapher made using PlotlyJS
#### A short and simple (though extremely slow) 3D grapher made using PlotlyJS

This Grapher aims to be easy to use  
MathJS chosen for ease of use eg. (generating random numbers and pi - compared to doing it in native javascript) (also convienently does input sanitation)  
Fills the issue that there are no 3D graphers available for PlotlyJS
### Screenshots

![A graph with a nice ripple shape](ripple_graph.png "z=((-e^(-x*y/1)*cos( (x^2+y^2)/10 ))+14*log(10000/(x^2+y^2)+.01))*( cos(x^2+y^2)/10)+3*((x)-(x))*((y)-(y))")
Thanks given to https://www.physicsforums.com/threads/cool-3-d-functions-for-graphing.140087/ for the equation


![A graph showing a very fuzzy hill](fuzzy_hill_graph.png "z = random() + sin(y-x) + cos(x+y) + random(sqrt(y))")
