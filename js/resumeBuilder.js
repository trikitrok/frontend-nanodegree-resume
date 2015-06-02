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
  "biopic": "images/fry.jpg"
};

var education = {
  "schools": [{
    "name": "Universidad de Barcelona",
    "location": "Barcelona",
    "degree": "BSc",
    "majors": ["Physics"],
    "dates": 2008,
    "url": "http://www.ub.edu/fisica/en/"
  }, {
    "name": "Universidad de Las Palmas de Gran Canaria",
    "location": "Las Palmas de Gran Canaria",
    "degree": "BSc",
    "majors": ["Surveying Engineering"],
    "dates": 2002,
    "url": "http://www.eiic.ulpgc.es/index.php?option=com_k2&view=item&id=25&Itemid=207&lang=es"
  }],
  "onlineCourses": [{
    "title": "Becoming Human: Anthropology (BeHuman) by Greg Downey",
    "school": "Macquarie University at Open2Study",
    "date": 2013,
    "url": "https://www.open2study.com/courses/becoming-human-anthropology"
  }, {
    "title": "A Brief History of Humankind by Yuval Noah Harari",
    "school": "Hebrew University of Jerusalem at Coursera",
    "date": 2013,
    "url": "https://www.coursera.org/course/humankind"
  }]
};

var work = {
  "jobs": [{
    "employer": "Runroom",
    "title": "Software Developer",
    "location": "Barcelona",
    "dates": "February 2014 - February 2015",
    "description": "Backend development in Python and PHP"
  }, {
    "employer": "Barcelona Supercomputing Center",
    "title": "Software Developer",
    "location": "Barcelona",
    "dates": "May 2010 - January 2014",
    "description": "Worked in a team that was developing an object oriented protein energy landscape exploration simulator using C++."
  }]
};

var projects = {
  "projects": [{
    "title": "Glowworm++",
    "url": "https://bitbucket.org/trikitrok/glowworm/overview",
    "dates": "2013 - Present day",
    "description": "Glowworm++ is a C++ implementation of the Glowworm Swarm Optimization algorithm (http://dl.acm.org/citation.cfm?id=1542054)",
    "images": ["images/197x148.gif", "images/197x148.gif"]
  }]
};

bio.display = function() {
  var self = this;

  displayRole();
  displayName();
  displayBiopic();
  displayWelcomeMessage();
  displayContactsAt("#topContacts");
  displaySkills();
  displayContactsAt("#footerContacts");

  function displayWelcomeMessage() {
    $("#header").append(
      HTMLwelcomeMsg.replace(dataPlaceHolder, self.welcomeMessage)
    );
  }

  function displayBiopic() {
    $("#header").append(HTMLbioPic.replace(dataPlaceHolder, self.biopic));
  }

  function displaySkills() {
    $("#header").append(HTMLskillsStart);

    self.skills.forEach(
      function(skill) {
        $("#skills").append(
          HTMLskills.replace(dataPlaceHolder, skill)
        );
      }
    );
  }

  function displayRole() {
    $("#header").prepend(HTMLheaderRole.replace(dataPlaceHolder, self.role));
  }

  function displayName() {
    $("#header").prepend(HTMLheaderName.replace(dataPlaceHolder, self.name));
  }

  function displayContactsAt(location) {
    for (var contactType in self.contacts) {
      $(location).append(
        HTMLcontactGeneric
        .replace("%contact%", contactType)
        .replace(dataPlaceHolder, self.contacts[contactType])
      );
    }
  }
};

education.display = function() {
  var self = this;

  displaySchools();
  displayOnlineSchools();

  function displayOnlineSchools() {
    $("#education").append(HTMLonlineClasses);

    self.onlineCourses.forEach(
      function displayOnlineCourse(onlineCourse) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last")
          .append(
            generateLink(
              HTMLonlineTitle,
              HTMLonlineSchool,
              onlineCourse.url,
              onlineCourse.title,
              onlineCourse.school)
          ).append(
            HTMLschoolDates.replace(dataPlaceHolder, onlineCourse.date)
          ).append(
            HTMLonlineURL.replace(dataPlaceHolder, onlineCourse.url)
          );
      }
    );
  }

  function displaySchools() {
    self.schools.forEach(
      function displaySchool(school) {
        var $educationEntry;
        $("#education").append(HTMLschoolStart);

        $educationEntry = $(".education-entry:last")
          .append(
            generateLink(
              HTMLschoolName,
              HTMLschoolDegree,
              school.url,
              school.name,
              school.degree)
          ).append(
            HTMLschoolDates.replace(dataPlaceHolder, school.dates)
          ).append(
            HTMLschoolLocation.replace(dataPlaceHolder, school.location)
          );

        school.majors.forEach(
          function displayMajor(major) {
            $educationEntry.append(
              HTMLschoolMajor.replace(dataPlaceHolder, major)
            );
          }
        );
      }
    );
  }
};

work.display = function() {
  this.jobs.forEach(
    function(job) {
      $("#workExperience").append(HTMLworkStart);

      $(".work-entry:last")
        .append(
          generateLink(
            HTMLworkEmployer,
            HTMLworkTitle,
            "#",
            job.employer,
            job.title)
        )
        .append(
          HTMLworkDates.replace(dataPlaceHolder, job.dates)
        )
        .append(
          HTMLworkLocation.replace(dataPlaceHolder, job.location)
        )
        .append(
          HTMLworkDescription.replace(dataPlaceHolder, job.description)
        );
    }
  );
};

projects.display = function() {
  this.projects.forEach(
    function(project) {
      var $projectEntry;

      $("#projects").append(HTMLprojectStart);

      $projectEntry = $(".project-entry:last")
        .append(
          HTMLprojectTitle
          .replace(dataPlaceHolder, project.title)
          .replace("#", project.url)
        )
        .append(
          HTMLprojectDates.replace(dataPlaceHolder, project.dates)
        )
        .append(
          HTMLprojectDescription.replace(dataPlaceHolder, project.description)
        );

      project.images.forEach(
        function(image) {
          $projectEntry.append(
            HTMLprojectImage.replace(dataPlaceHolder, image)
          );
        }
      );
    }
  );
};

bio.display();
education.display();
work.display();
projects.display();

appendMap();

function appendMap() {
  $("#mapDiv").append(googleMap);
  initializeMap();
}