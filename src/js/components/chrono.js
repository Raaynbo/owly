import {updateTimerUI} from "../utils.js"

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
		this.startDate = new Date();
		console.log(this.startDate)
	}

	stop(){
		clearInterval(this.timerID);
		let endDate = new Date();
		let finalTime = this.msToMinutes(endDate - this.startDate);
		this.reset()
		return finalTime;
	}
	reset(){
		minutes = 0;
		seconds = 0;
		milliseconds = 0;
	}

	msToMinutes(ms) {
			return Math.floor((ms / 1000 / 60));
	}
}

const chronoApp = new Chrono();



export {chronoApp};


