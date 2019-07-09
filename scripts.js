// Business Logic for AddressBook---
function AddressBook () {
  this.contacts = []
  this.currentId= 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id= this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignID= function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact= function(id); {
  for (var i=0; i<this.contacts.length;i++) {
    if (this.contacts[i] .id==id) {
      return this.contacts[i];
    }
  }
};
return false;
}

AddressBook.prototype.deleteContact= function(id) {
  for (var i=0; i< this.contacts.lenth; i++) {
    if (this.contacts [i].id ==id) {
      delete this.contacts[i];
      return true;
      }
    }
  };
  return false;
}


//Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName= firstName;
  this.lastName= lastName;
  this.phoneNumber=phoneNumber;
}

Contact.prototype.fullName= function () {
  return this.firstName + " " + this.lastName;
}

// User InterFace Logic --------
var addressbook= new AddressBook () ;

function displayContactDetails(addressBooktoDisplay) {
  var contactsList= $ ("ul#contacts");
  var htmlForContactInfo= "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id= +contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};


function attatchContactListeners () {
  $("ul#contacts").on("click", "li", function () {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document) .ready(function() {
  attatchContactListeners();
  $("form#new-contact").submit(function(event) {
  event.preventDefault ();
  var inputtedFirstName= $("input#new-first-name").val ();
  var inputtedLastName= $("input#new-last-name").val ();
  var inputtedPhoneNumer= $("input#new-phone-number").val();
  var newContact= new Contact (inputtedFirstName, inputtedLastName, inputtedPhoneNumer) ;
  addressBook.addContact (newContact);
  displayContactDetails (addressBook);
  })
})

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}
