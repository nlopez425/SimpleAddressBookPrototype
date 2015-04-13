
	
	$(document).ready(function() {
		
		//vars
		var ab = new AddressBook(),
			p,
			$fname = $('#fname'),
			$lname = $('#lname'),
			$email = $('#email'),
			$phoneNumber = $('#phone-number'),
			$addContactBtn = $('#addContact_btn'),
			$searchFirstName = $('#search-fname'),
			$searchLastName = $('#search-lname'),
			$searchBtn = $('#search_btn');
			
			$addContactBtn.on("click",addContact);
			$searchBtn.on("click",function(){
				
				
				search($searchFirstName.val(), $searchLastName.val());
				
				
			});
			
			function addContact(){
				
				p = new Person();
				
				//set values for person info
				p.setName($fname.val(), $lname.val());
				p.setEmail($email.val());
				p.setPhoneNumber($phoneNumber.val());
				
				//add the contact to the address book
				ab.addContact(p);
				
				console.log("list of contacts being added", ab.contacts);
			}
			
			
			function search(fname, lname){
				
				var contacts = ab.search(fname,lname);
				
				var html = "<ul>";
				
				for(var c = 0; c < contacts.length; c++){
						
					html += "<li>";
					
					html += "<div> Name: " + contacts[c].getWholeName() + "</div>";
					html += "<div> Email: " + contacts[c].getEmail() + "</div>";
					html += "<div> Phone Number: " + contacts[c].getPhoneNumber() + "</div>";
					
					html += "</li>";
					
				}
				
				html += "</ul>";
				
				$('#search-results').html(html);
				
			}
	});
	
