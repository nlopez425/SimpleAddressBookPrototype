(function ($) {

	function AddressBook() {
		
		this.contacts = {};
		
	}

	AddressBook.prototype.constructor = "AddressBook";

	AddressBook.prototype.addContact = function (person) {

		this.hashTableInsert(person);

	}

	AddressBook.prototype.removeContact = function (person) {



	}

	AddressBook.prototype.hashTableInsert = function (person) {

		var lastName = person.getLastName(),
		firstLetter = lastName.charAt(0).toUpperCase();

		this.contacts = this.contacts || {};
		
		if(this.contacts.hasOwnProperty(firstLetter)){

			this.contacts[firstLetter].push(person);

		}else{

			this.contacts[firstLetter] = [];
			this.contacts[firstLetter].push(person);

		};


	}
	
	
	AddressBook.prototype.search = function(fname, lname){
		
		var results = [],
			firstLetterLastName = lname.charAt(0).toUpperCase(),
			listOfPersons = this.contacts[firstLetterLastName] || [],
			totalContacts = listOfPersons.length; 
			

		for(var i = 0; i < totalContacts; i++){
			
			if(fname != "" && lname != ""){
				
				if(listOfPersons[i].lastName.toUpperCase() == lname.toUpperCase() && listOfPersons[i].firstName.toUpperCase() == fname.toUpperCase()){
				
					results.push(listOfPersons[i]);
				
				}
				
			}else if(fname == "" && lname != ""){
				
				if(listOfPersons[i].lastName.toUpperCase() == lname.toUpperCase()){
				
					results.push(listOfPersons[i]);
				
				}
				
			}else{
				
				results = false;
				
			}
			
		}//end of for loop
			
		
		return results;
		
	}
	
	
	
	window.AddressBook = AddressBook;

}(jQuery));