$(document).ready(function() {
    let clickCount = 0;
    $('#colorBox').css('backgroundColor', '#3498db');
    $('#colorBtn').click(function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r}, ${g}, ${b})`;
        $(this).css('backgroundColor', color);
        $('#colorBox').css('backgroundColor', color);
        const hexColor = rgbToHex(r, g, b);
        $('#colorValue').text(hexColor);
        clickCount++;
        $('#clickCount').text(clickCount);
    });
    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
});