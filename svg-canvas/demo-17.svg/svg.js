
var svg = document.getElementById("pic");
drawAxis();
drawGrid();
function drawAxis() {
    for (var x = 100; x <= svg.getAttribute("width"); x+=100) {
        var text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute("x", x);
        text.setAttribute("y", "12");
        text.innerHTML = x;
        svg.appendChild(text);
    }
    for (var y = 100; y <= svg.getAttribute("height"); y+=100) {
        var text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        text.setAttribute("x", 0);
        text.setAttribute("y", y);
        text.innerHTML = y;
        svg.appendChild(text);
    }
}
function drawGrid() {
    for (var x = 100; x <= svg.getAttribute("width"); x+=100) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1", x);
        line.setAttribute("y1", 0);
        line.setAttribute("x2", x);
        line.setAttribute("y2", svg.getAttribute("height"));
        line.style.stroke = "#ccc";
        svg.insertBefore(line, svg.childNodes[0]);
    }
    for (var y = 100; y <= svg.getAttribute("height"); y+=100) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
        line.setAttribute("x1", 0);
        line.setAttribute("y1", y);
        line.setAttribute("x2", svg.getAttribute("width"));
        line.setAttribute("y2", y);
        line.style.stroke = "gray";
        svg.insertBefore(line, svg.childNodes[0]);
    }
}
