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
	
}

function main() {

}