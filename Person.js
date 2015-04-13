(function ($) {

	function Person() {

		this.firstName;
		this.lastName;
		this.email;
		this.phoneNumber;
		this.streetAdress;
		this.city;
		this.state;
		this.zip;

	}

	Person.prototype.constructor = "Person";

	Person.prototype.setName = function (fname,lname) {

		this.firstName = fname;
		this.lastName = lname;

	}
	
	Person.prototype.setEmail = function(email){
		
		this.email = email;
		
	}
	
	Person.prototype.setPhoneNumber = function(pn){
		
		this.phoneNumber = pn;
		
	}

	Person.prototype.getFirstName = function () {

		return this.firstName;

	}

	Person.prototype.getLastName = function () {

		return this.lastName;

	}

	Person.prototype.getWholeName = function () {

		return this.firstName + " " + this.lastName;

	}
	
	Person.prototype.getEmail = function(){
		
		return this.email;
		
	}
	
	Person.prototype.getPhoneNumber = function(){
		
		return this.phoneNumber;
		
	}

	window.Person = Person;
}(jQuery));