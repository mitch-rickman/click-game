var helpers = {};

helpers.swapClasses = function( element, outClass, inClass ) {
    element.classList.remove( outClass );
    element.classList.add( inClass );
}

module.exports = helpers;
