var c = document.getElementById("containerCanvas");
var ctx = c.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, c.width, c.height);

var g1 = createLinearGradient(ctx, 0, 0, 0, c.height / 2, [[0, "blue"], [1, "transparent"]]);
ctx.fillStyle = g1;
ctx.fillRect(10, 10, c.width / 2 + 230, c.height / 2 - 20);

var g2 = createLinearGradient(ctx, 0, c.height / 2, 0, c.height, [[0, "green"], [1, "transparent"]]);
ctx.fillStyle = g2;
ctx.fillRect(10, c.height / 2 + 10, c.width / 2 + 230, c.height / 2 - 20);

var g3 = createLinearGradient(ctx, 10, 10, c.width / 2 + 230, c.height - 20, [[0, "black"], [1, "transparent"]]);
ctx.strokeStyle = g3;
ctx.strokeRect(125, 100, c.width / 2, c.height - 200);
