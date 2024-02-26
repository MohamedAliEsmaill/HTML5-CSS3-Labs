var c = document.getElementById("containerCanvas");
var ctx = c.getContext("2d");

// Draw background circle
var bgGradient = createRadialGradient(ctx, c.width / 2, c.height / 2, 20, c.width / 2, c.height / 2, 200, [[0, "#0A3B4C"], [1, "#001C2E"]]);
ctx.beginPath();
ctx.arc(c.width / 2, c.height / 2, 200, 0, 2 * Math.PI);
ctx.fillStyle = bgGradient;
ctx.fill();
ctx.closePath();

// Draw inner circle
var innerGradient = createRadialGradient(ctx, c.width / 2, c.height / 2, 20, c.width / 2, c.height / 2, 150, [[0, "#007ACC"], [1, "#001F3F"]]);
ctx.beginPath();
ctx.arc(c.width / 2, c.height / 2, 150, 0, 2 * Math.PI);
ctx.fillStyle = innerGradient;
ctx.fill();
ctx.closePath();

// Draw the "N" in the center
ctx.font = "bold 120px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("N", c.width / 2, c.height / 2);