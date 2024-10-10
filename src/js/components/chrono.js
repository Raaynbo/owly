import {updateTimerUI, hoursToMinutes, msToMinutes} from "../utils.js"
console.log("chrono.js");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

class Chrono {
	constructor(){
		this.timerID = 0;
		this.startDate = 0;
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
		if (minutes >= 60){
			minutes = 0;
			hours++;
		}
		const time = hours + ":" + minutes + ":" + seconds;
		updateTimerUI(time)
	}
	start(){
		this.timerID = setInterval(this.chronometre, 10);
		this.startDate = new Date();
		console.log(this.startDate)
	}

	stop(){
		clearInterval(this.timerID);
		let endDate = new Date();
		let finalTime = msToMinutes(endDate - this.startDate);
		minutes = hoursToMinutes(hours);
		this.reset()
		return finalTime;
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


