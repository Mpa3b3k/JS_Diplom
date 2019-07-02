"use strict";


class Profile {
	
  constructor({ username, name: { firstName, lastName }, pass }) {
		this.username = username;
		this.name = {
				firstName,
				lastName,
		};
		this.pass = pass;
}

  adding(name, real, pass, callback) {

  	callback();

  }

  auth(name, real, pass, callback) {

  	callback();

  }

  pay(money) {

  }

  conv(badMoney) {

  }

  trans(other) {

  }
}

function course() {
	
} // не очень понял как реализовать функцию

function main() {

	const me = new Profile;
	const you = new Profile;

	me.adding();

	me.auth();

	me.pay();

	me.conv();

	you.adding();

	me.trans(you);
}