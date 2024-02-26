function createLinearGradient(ctx, x0, y0, x1, y1, colorStops) {
    var gradient = ctx.createLinearGradient(x0, y0, x1, y1);
    for (var i = 0; i < colorStops.length; i++) {
        gradient.addColorStop(colorStops[i][0], colorStops[i][1]);
    }
    return gradient;
}
