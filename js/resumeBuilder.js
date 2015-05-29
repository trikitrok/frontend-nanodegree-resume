"use strict";

function formatElements(template, substitutions) {
  var i,
    substitution,
    res = template;

  for (i = 0; i < substitutions.length; i++) {
    substitution = substitutions[i];
    res = res.replace(substitution.placeHolder, substitution.value);
  }

  return res;
}

function appendFormattedElement(nodeSelector, template, substitutions) {
  $(nodeSelector).append(
    formatElements(template, substitutions)
  );
}

function prependFormattedElement(nodeSelector, template, substitutions) {
  $(nodeSelector).prepend(
    formatElements(template, substitutions)
  );
}

var bio = {
  name: "Manuel Rivero",
  role: "Web Developer",
  contacts: {
    "mobile": "619492805",
    "email": "trikitrok@gmail.com",
    "twitter": "@trikitrok",
    "github": "https://github.com/trikitrok",
    "blog": "http://garajeando.blogspot.com.es/",
    "location": "Barcelona",
  },
  picture: "../images/fry.jpg",
  skills: [
    "awesomeness",
    "delivering things",
    "caring"
  ],
  message: "Si la vida no me sonrie, yo le hago cosquillitas"
};

prependFormattedElement(
  "#header", HTMLheaderRole, [{
    placeHolder: "%data%",
    value: bio.role
  }]
);

prependFormattedElement(
  "#header", HTMLheaderName, [{
    placeHolder: "%data%",
    value: bio.name
  }]
);

function addContacts() {
  for (var contactType in bio.contacts) {
    appendFormattedElement(
      "#topContacts",
      HTMLcontactGeneric, [{
        placeHolder: "%contact%",
        value: contactType
      }, {
        placeHolder: "%data%",
        value: bio.contacts[contactType]
      }]
    );
  }
}

addContacts();