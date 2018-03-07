var ns = 'http://www.w3.org/2000/svg';
var cvs = document.getElementById('cvs');
var clear = document.getElementById('clearButt');

var drawCirc = function(e) {
    var circ = document.createElementNS( ns, 'circle' );
    circ.setAttribute( 'cx', e.offsetX );
    circ.setAttribute( 'cy', e.offsetY );
    circ.setAttribute( 'r', 33 );
    circ.setAttribute( 'fill', 'coral' );
    cvs.appendChild(circ);
    circ.addEventListener( 'click', change );
}

var change = function(e) {
    if( this.getAttribute('fill') == 'coral' ) {
	this.setAttribute( 'fill', 'springgreen' );
	e.stopPropagation();
    } else {
	cvs.removeChild(this);
	e.stopPropagation();
	randomCirc();
    }
}

var randomCirc = function() {
    var circ = document.createElementNS( ns, 'circle' );
    circ.setAttribute( 'cx', Math.random() * 500 );
    circ.setAttribute( 'cy', Math.random() * 500 );
    circ.setAttribute( 'r', 33 );
    circ.setAttribute( 'fill', 'coral' );
    cvs.appendChild(circ);
    circ.addEventListener( 'click', change );
}

var clearIt = function() {
    while( cvs.lastChild ) {
	cvs.removeChild( cvs.lastChild );
    }
}

cvs.addEventListener( 'click', drawCirc );
clear.addEventListener( 'click', clearIt );
