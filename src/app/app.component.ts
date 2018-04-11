import { Component } from "@angular/core";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent {
	public userInput:String;

	alertMsg() {
		alert('hey');
	}
}
