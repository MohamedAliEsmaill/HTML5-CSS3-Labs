// function to create radial gradient
function createRadialGradient(ctx, x0, y0, r0, x1, y1, r1, colorStops) 
{
    var gradient = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    for (var i = 0; i < colorStops.length; i++) 
    {
        gradient.addColorStop(colorStops[i][0], colorStops[i][1]);
    }
    return gradient;
}
