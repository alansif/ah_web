export function blinkBorder(elementId, color='#ff0000') {
    document.getElementById(elementId).style.outline = '3px solid rgba(0,0,0,0)';
    internalBlinkBorder('rgba(0,0,0,0)',color,elementId, 60, 7);
}

function internalBlinkBorder(colorA, colorB, elementId, interval, count) {
    if (count < 0) return;
    document.getElementById(elementId).style.outlineColor = colorB;
    setTimeout(function () {
        internalBlinkBorder(colorB, colorA, elementId, interval, count - 1);
        colorB = null;
        colorA = null;
        elementId = null;
        interval = null;
        count = null;
    }, interval);
}
