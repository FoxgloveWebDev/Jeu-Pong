
//skeleton for every 2d video game happening in a single window.

// 1. A function launches the canvas if it is correctly defined
// 2. the canvas is called with the variable named context
// 3. the function launches another function to draw, animate, interpret future events.


//pong skeleton

// On each refresh (every 2ms):
// 1. Empty the window
// 2. Draw two rectangular bars
// 3. Draw the ball
// 4. Drow the net constituted of rectangles
// 5. Detect collisions between ball and objects (top, bottom, bars...)
// 6. Detect if a player pressed a key
// 7. Calculate the future position of mobile objets
// 8. Write the two scores

// Needed variables
// 1. Canvas dimensions
// 2. Dimensions of the bars and ball
// 3. Position of these objects
// 4. Scores
// 5. Speed of the ball and bars (Number of pixels towards x and y passed between two refreshments)


window.addEventListener('load', function () {

    var elem = document.getElementById('canvasElem');


    // recuperating the canvas object, if not found, the function will stop and do nothing
    if (!elem || !elem.getContext) {
        return;
    }

    // recuperating the 2D context if the canvas is found.
    context = elem.getContext('2d'); //shortening the canvas name. Else it would be document.getElementById('canvasElem').getContext('2d') => the 2d context of the canvasElem element of the document.
    if (!context) {
        return;
    }

    //2d context refresh every x ms
    boucleJeu = setInterval(refreshGame, intervalTemps); // defined later in the code
}, false);


// Variables
    //internal variables
    var boucleJeu // called to refresh
    var intervalTemps = 2; // time between 2 refresh in ms
    var context; // the 2d context

    //game constants
    var windowWidth = 600; // canvas width
    var windowHeight = 600; // canvas height
    var goForward = 1; // beginning on the top left, going towards right

    // objects positions
    // left racket center
    var absRacket1 = 60;
    var ordRacket1 = 300;

    //right racket center
    var absRacket2 = 540;
    var ordRacket2 = 300;

    // ord of the bars after the goals
    var barStart = ordRacket1;

    //center of the ball
    var absBall = 300;
    var ordBall = 300;
    var absStart = absBall; // keeping in memory the initial position for after the goals
    var ordStart = ordBall;

    // Width and height of the bars 
    var w = 3;
    var h = 60;

    // width and height of the ball
    var ww = 6;
    var hh = 6;

    // Rackets moving speed
    var move = 18;

    // Horizontal and vertical speed of the ball
    var horiz = 2;
    var vertic = 0;

    //scores
    var score1 = 0;
    var score2 = 0;



// Refresh loop
// Game loop
    function refreshGame () {  // defined later in the code

    // Clean the screen. => In the context, execute clearRect = clean the rectangle, beginning from origin (0,0), with width and height as the 2 other parameters
    context.clearRect(0,0, windowWidth, windowHeight);

    // Drawing the elements
    drawBar(absRacket1, ordRacket1);
    drawBar(absRacket2, ordRacket2);
    drawBall(absBall, ordBall);

    // elements deplacement
    moveBall();

    // scores display
    writeScore(score1,1);
    writeScore(score2,2);

    // keyboard events listener
    window.document.onkeydown = itMoves;
}



    // Function définitions


    function drawBar (x, y) {
        context.fillStyle = 'white';
        context.beginPath(); //begin construction
        context.moveTo(x-w,y+h); //bottom left
        context.lineTo(x+w, y+h); //bottom right
        context.lineTo(x+w, y-h); //top right
        context.lineTo(x-w, y-h); //top left
        context.closePath(); // end construction
        context.fill(); //fill construction
   }


   function drawBall (x, y) {
       context.fillStyle = 'white';
       context.beginPath(); //begin construction
       context.moveTo(x-ww,y+hh); //bottom left
       context.lineTo(x+ww, y+hh); //bottom right
       context.lineTo(x+ww, y-hh); //top right
       context.lineTo(x-ww, y-hh); //top left
       context.closePath(); // end construction
       context.fill(); //fill construction
   }


   function moveBall () {

   }


   function writeScore () {

    }


   function itMoves () {
        //right racket
        //top arrow pressed
        if (event.keyCode == 38) {
        console.log('haut');
        if (ordRacket2 >= h) {
            ordRacket2 = ordRacket2-move
        }   
    }
        //bottom arrow pressed
        else if (event.keyCode == 40) {
        console.log('bas');
    
        }
    }   
    
    //Z pressed
        else if (event.keyCode == 90) {
            console.log('haut');
        if (ordRacket1 >= h) {
        ordRacket1 = ordRacket1-move
        }
    }

        //S pressed
        else if (event.keyCode == 83) {
            console.log('bas');
    }   
}
