var slate=document.getElementById("screen");
var x=[12, 14, 15, 16, 17, 18,19,20,22,23];
var y=[180,200,320,305,400,420,400,410,500,440];
var data=[];

for(i=0;i<10;i++){
    data.push([x[i],y[i]])
}

//Creating Labels for x axis
var xAxisLabels = [];
for(var i = 12; i< 26; i += 2){
    xAxisLabels.push(i);
}

//Adding x-axis labels to svg
d3.select("#screen").selectAll("text").data(xAxisLabels).enter().append("text").attr("x", function(d, i){
    return (i+1) * 700 / xAxisLabels.length;
}).attr("y", 600).text(function(d){ return d; });

//Creating Labels for y axis
var yAxisLabels = [];
for(var i = 100; i<= 600; i+=100){
    yAxisLabels.push(i);
}

//Adding y-axis labels to svg
d3.select("#screen").selectAll("text").data(yAxisLabels).enter().append("text").attr("x", 0).attr("y", function(d,i){
    return (i+1) * 600 / yAxisLabels.length;
}).text(function(d) { return d; });

    
d3.select("#screen").selectAll("text").data(yAxisLabels).enter()
    
var container=d3.select("svg");
var circles=container.selectAll("circle").data(data).enter();
circles.append("circle").attr("cx", function(d) {return (d[0]-10)*100/2;}).attr("cy", function(d) {return 600-d[1];}).attr("r", 10);
