$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';
    // paper.view.draw();

    var c;
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x,y,20);
            c.fillColor = 'green';
        }
    }

    console.log('main.js is loaded!');
});