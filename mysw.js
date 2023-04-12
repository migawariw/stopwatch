// const now = new Date();
// import {numtohour,numtominute,numtosecond} from numtotime
function numtocenti( num ) {
	return ( Math.floor( num / 10 ) % 100 ).toString().padStart( 2, '0' );
}
function numtosecond( num ) {
	return ( Math.floor( num / 1000 ) % 60 ).toString().padStart( 2, '0' );
}

function numtominute( num ) {
	return ( Math.floor( num / 60000 ) % 60 ).toString().padStart( 2, '0' );
}

function numtohour( num ) {
	return Math.min( Math.floor( num / ( 1000 * 3600 ) ), 99 ).toString().padStart( 2, '0' );
}
const timer = document.getElementById( "timer" );
const startbtn = document.getElementById( "start" );
let stopbtn = document.getElementById( "stop" );

// function saynow() {
// 	timer.textContent = new Date().toLocaleString( "ja-JP", { hour: "numeric", second: "numeric", minute: "numeric" } );
// }
let time = 0;


let startTime = 0;
let resume = 0;
let timerId;


let judge = 0;
timer.textContent ="00:00:00.00"
function tick() {
	now = new Date().getTime() - startTime
	timer.textContent = numtohour( now ) + ':' + numtominute( now ) + ':' + numtosecond( now ) + '.' + numtocenti( now );
}
function start() {
	if ( judge == 0 ) {
		startTime = new Date().getTime() - resume;
		judge = 1;
		timerId = setInterval( tick, 10 );
	} else {
		pass
	}
}
function stop() {
	clearInterval( timerId );
	if ( judge == 1 ) {
		judge = 0
		resume = new Date().getTime() - startTime;
	} else {
		pass
	}
}
// function upnow() {
// 	setInterval( saynow, 100 );
// }
startbtn.onclick = start;
stopbtn.onclick = stop;
