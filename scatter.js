var slate=document.getElementById("screen");
var x=[12, 14, 15, 16, 17, 18,19,20,22,23];
var y=[180,200,320,305,400,420,400,410,500,440];
var data=[];

for(i=0;i<10;i++){
    data.push([x[i],y[i]])
}

var container=d3.select("svg");
var circles=container.selectAll("circle").data(data).enter();
circles.append("circle").attr("cx", function(d) {return (d[0]-10)*100/2;}).attr("cy", function(d) {return 600-d[1];}).attr("r", 10);
