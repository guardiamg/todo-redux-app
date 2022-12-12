export class Todo {
	public id : number;
	public text : string;
	public completed : boolean;

	constructor(text : string) {
		this.id = Math.floor(Math.random()*(342938198257-171869843711+1)+342938198257);
		this.text = text;
		this.completed = false;
	}
}