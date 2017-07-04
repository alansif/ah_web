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


export function scrollElement(elmnt, duration) {
    var e = document.documentElement;
    if(e.scrollTop===0){
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t+1===e.scrollTop--?e:document.body;
    }
    scrollTo(e, elmnt.offsetTop, duration);
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}
