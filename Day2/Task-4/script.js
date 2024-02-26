let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

window.addEventListener("load", function () 
{
  var startX = 0;
  var startY = 0;
  var endX = 100;
  var endY = 100;
  var amount = 0;
  let y, z;

  let interval = setInterval(function () 
  {
    amount += 0.5;
    ctx.moveTo(startX, startY);
    ctx.lineTo(
      (y = startX + (endX - startX) * amount),
      (z = startY + (endY - startY) * amount)
    );

    if (Math.floor(y) == canvas.width && Math.floor(z) == canvas.height) 
    {
      alert("animation end");
      clearInterval(interval);
    }

    ctx.stroke();
  }, 20);
});
