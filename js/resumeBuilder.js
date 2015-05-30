"use strict";

var bio = {
  "name": "Manuel Rivero",
  "role": "Web Developer",
  "contacts": {
    "mobile": "619492805",
    "email": "trikitrok@gmail.com",
    "github": "trikitrok",
    "twitter": "@trikitrok",
    "location": "Barcelona",
  },
  "welcomeMessage": "Si la vida no me sonrie, yo le hago cosquillitas",
  "skills": [
    "awesomeness",
    "delivering things",
    "caring"
  ],
  "biopic": "images/fry.jpg",
  display: function() {
    var self = this,
      datePlaceHolder = "%data%";

    displayRole();
    displayName();
    displayBiopic();
    displayWelcomeMessage();
    displayContactsAt("#topContacts");
    displaySkills();
    displayContactsAt("#footerContacts");

    function displayWelcomeMessage() {
      $("#header").append(
        HTMLwelcomeMsg.replace(datePlaceHolder, self.welcomeMessage)
      );
    }

    function displayBiopic() {
      $("#header").append(HTMLbioPic.replace(datePlaceHolder, self.biopic));
    }

    function displaySkills() {
      var i;

      $("#header").append(HTMLskillsStart);

      for (i = 0; i < self.skills.length; i++) {
        $("#skills").append(
          HTMLskills.replace(datePlaceHolder, self.skills[i])
        );
      }
    }

    function displayRole() {
      $("#header").prepend(HTMLheaderRole.replace(datePlaceHolder, self.role));
    }

    function displayName() {
      $("#header").prepend(HTMLheaderName.replace(datePlaceHolder, self.name));
    }

    function displayContactsAt(location) {
      for (var contactType in self.contacts) {
        $(location).append(
          HTMLcontactGeneric
          .replace("%contact%", contactType)
          .replace(datePlaceHolder, self.contacts[contactType])
        );
      }
    }
  }
};

bio.display();