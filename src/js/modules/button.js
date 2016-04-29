var helpers = require('./helpers');

var Button = function( buttonId, timerId ) {
    var container, button, timer, time, count, state, currentRating;

    var nextLevel = levelAdjuster = 20;

    var ratings = ['start', 'poor', 'okay', 'good', 'great', 'amazing'];

    this.init = function() {
        button = document.getElementById(buttonId);
        timer = document.getElementById(timerId);
        container = button.parentNode;
        setup();
    };

    function setup() {
        state = currentRating = "start";
        time = 10;
        count = 0;
        nextLevel = 20;
        button.innerHTML = "Click";
        timer.innerHTML = "10";
        addEvents();
    }

    function onButtonClick( e ) {

        if ( e.screenX == 0 ) {
            return false;
        }

        else if ( state === "start" ) {
            activate();
            state = "playing";
            printScore();
        }

        else if ( state === "playing" ) {
            printScore();
        }

        else if( state === "end" ) {
            reset();
        }
    }

    function printScore() {
        count++;
        button.innerHTML = count >= 10 ? count : "0" + count;
        animateButton();
    }

    function animateButton() {
        if ( count >= nextLevel && currentRating !== 'amazing' ) {
            nextLevel += levelAdjuster;
            nextRating();
        }

        else if ( count >= 1) {
            helpers.swapClasses( container, "text", "start");
        }
    }

    function nextRating() {
        var c = ratings.indexOf(currentRating);
        currentRating = ratings[c+1];
        helpers.swapClasses(container, ratings[c], ratings[c+1] );
    }



    function endGame() {
        state = "end";
        deactivate();
        removeEvents();

        timer.innerHTML = "Try again?";
        timer.addEventListener('click', reset)
    }

    function reset() {
        setup();

        ratings.map( (r) => container.classList.remove( r ) );

        container.classList.add("text");
    }

    function addEvents() {
        button.addEventListener("click", onButtonClick);
    }

    function removeEvents() {
        button.removeEventListener("click", onButtonClick);
    }

    function activate() {
        container.classList.add('active');
        setTimeout( countdown, 1000 );
    }

    function deactivate() {
        container.classList.remove('active');
    }

    function countdown() {
        if ( time === 0 ) {
            console.log("game over");
            endGame();
            return false
        }

        time--;
        timer.innerHTML = time.lenth > 1 ? time : "0" + time;
        setTimeout( countdown, 1000 );
    }
};

module.exports = Button;
