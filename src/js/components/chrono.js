console.log("chrono.js");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

class Chrono {
	constructor(){
		this.timerID = 0;
	}

	chronometre(){
		milliseconds++ ;
		if (milliseconds>=100){
			milliseconds = 0;
			seconds++;
		}
		if (seconds>=60){
			seconds = 0;
			minutes++;
		}
		console.log(`milli ${milliseconds}`)
		console.log(`sec ${seconds}`)
		console.log(`min ${minutes}`)
		const time = minutes + ":" + seconds;
		console.log(time);
	}
	start(){
		this.timerID = setInterval(this.chronometre, 10);
	}

	stop(){
		clearInterval(this.timerID);
	}
	reset(){
		clearInterval(this.timerID);
		minutes = 0;
		seconds = 0;
		milliseconds = 0;
	}
}

const chronoApp = new Chrono();



export {chronoApp};


