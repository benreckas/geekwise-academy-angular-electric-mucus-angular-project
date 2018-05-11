import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {

	public userInput:string;
	public waitForMe:Observable<boolean>;
	public previousAnswers: string[];
	public success: boolean = false;

	public userIn(event) {
		console.log(event);
	}

	ngOnInit(): void {
		this.userInput = "";
		this.previousAnswers = [];
		this.waitForMe = Observable.timer(2000).map( () => true );
		console.log('ngOnInit', this.waitForMe);
	}

	addToPrev(answer: string): void {
		answer == 'electric mucus' ? this.success = true : this.success = false;
		this.previousAnswers.push(answer);
	}
}
