var dataPlaceholder = '%data%';

var bio = {
    "name": "Li Xinyang",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "1234-1234",
        "email": "sample@email.com",
        "github": "li-xinyang",
        "twitter": "xli030",
        "location": "Singapore",
        "blog": "http://li-xinyang.github.io"
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quas quidem, ea porro maxime ab culpa odio expedita ipsum, fugit vero deserunt, minima quibusdam aliquam natus consectetur ipsa tenetur cum.",
    "skills": ["Programming", "Financial Planning", "UI Design", "UX Design"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var dataPlaceholder = '%data%';
        var formattedName = $(HTMLheaderName.replace(dataPlaceholder, bio.name));
        var formattedRole = $(HTMLheaderRole.replace(dataPlaceholder, bio.role));
        var formattedBioPic = $(HTMLbioPic.replace(dataPlaceholder, bio.biopic));
        var formattedWelcomeMsg = $(HTMLwelcomeMsg.replace(dataPlaceholder, bio.welcomeMessage));

        $('#header').prepend(formattedRole)
            .prepend(formattedName)
            .append(formattedBioPic)
            .append(formattedWelcomeMsg);

        // Insert HEAD -> TOP CONTACTS info.
        var formattedMobile = HTMLmobile.replace(dataPlaceholder, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(dataPlaceholder, bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace(dataPlaceholder, bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace(dataPlaceholder, bio.contacts.github);
        var formattedBlog = HTMLblog.replace(dataPlaceholder, bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace(dataPlaceholder, bio.contacts.location);

        $('#topContacts').append(formattedMobile)
            .append(formattedEmail)
            .append(formattedTwitter)
            .append(formattedGithub)
            .append(formattedBlog)
            .append(formattedLocation);

        // Insert HEAD -> SKILLS info
        if (bio.skills.length !== 0) {
            $('#header').append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace(dataPlaceholder, bio.skills[i]);
                $('#skills').append(formattedSkills);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "RMIT",
        "location": "Melbourne",
        "degree": "Bachelor",
        "majors": ["Economics and Finance", "Computer Science"],
        "dates": 20140101,
        "url": "https://www.rmit.edu.au/"
    }, {
        "name": "RMIT",
        "location": "Melbourne",
        "degree": "Bachelor",
        "majors": ["Economics and Finance", "Computer Science"],
        "dates": 20140101,
        "url": "https://www.rmit.edu.au/"
    }, {
        "name": "RMIT",
        "location": "Melbourne",
        "degree": "Bachelor",
        "majors": ["Economics and Finance", "Computer Science"],
        "dates": 20140101,
        "url": "https://www.rmit.edu.au/"
    }, {
        "name": "RMIT",
        "location": "Melbourne",
        "degree": "Bachelor",
        "majors": ["Economics and Finance", "Computer Science"],
        "dates": 20140101,
        "url": "https://www.rmit.edu.au/"
    }],
    "onlineCourses": [{
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "date": "20150501",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "date": "20150501",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "date": "20150501",
        "url": "https://www.udacity.com/"
    }, {
        "title": "Front-end Nanodegree",
        "school": "Udacity",
        "date": "20150501",
        "url": "https://www.udacity.com/"
    }],
    "display": function() {
        for (school in this.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(dataPlaceholder, this.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(dataPlaceholder, this.schools[school].degree);
            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
            var formattedSchoolDate = HTMLschoolDates.replace(dataPlaceholder, this.schools[school].dates);
            $('.education-entry:last').append(formattedSchoolDate);
            var formattedSchoolLocation = HTMLschoolLocation.replace(dataPlaceholder, this.schools[school].location);
            $('.education-entry:last').append(formattedSchoolLocation);
            for (major in this.schools[school].majors) {
                var formattedSchoolMajor = HTMLschoolMajor.replace(dataPlaceholder, this.schools[school].majors[major]);
                $('.education-entry:last').append(formattedSchoolMajor);
            }
        }
        $('#education').append(HTMLonlineClasses);
        for (onlineCourse in this.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace(dataPlaceholder, this.onlineCourses[onlineCourse].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace(dataPlaceholder, this.onlineCourses[onlineCourse].school);
            $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace(dataPlaceholder, this.onlineCourses[onlineCourse].date);
            $('.education-entry:last').append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace(dataPlaceholder, this.onlineCourses[onlineCourse].url);
            $('.education-entry:last').append(formattedOnlineURL);
        }
    }
};

var work = {
    "jobs": [{
        "employer": "Apple",
        "title": "Front-end Engineer",
        "location": "Singapore",
        "dates": "2014-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia facere illo harum repellendus provident repudiandae maiores rem debitis neque, magnam nulla, architecto amet aut modi dolores error optio magni!"
    }, {
        "employer": "NUS",
        "title": "Front-end Engineer",
        "location": "Singapore",
        "dates": "2014-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quaerat illo placeat reiciendis architecto sint quasi veniam dolor accusantium, cupiditate, iure. Ipsam repellendus fugit facere numquam praesentium, odit quas velit!"
    }],
    "display": function() {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(dataPlaceholder, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(dataPlaceholder, work.jobs[job].title);
            // pseudo-class
            $('.work-entry:last').append(formattedEmployer + formattedTitle);

            var formattedDates = HTMLworkDates.replace(dataPlaceholder, work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace(dataPlaceholder, work.jobs[job].location);
            $('.work-entry:last').append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace(dataPlaceholder, work.jobs[job].description);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

var projects = {
    "projects": [{
        "title": "HTML5 Hello World",
        "date": "2014-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat tempora repudiandae ad dolor cumque aliquid quaerat voluptatibus illum cum alias eius ab, quasi iste amet a dicta nam? Facilis, possimus.",
        "imges": ['http://placehold.it/300x300', 'http://placehold.it/300x300', 'http://placehold.it/300x300', 'http://placehold.it/300x300']
    }, {
        "title": "Responsive Online Portfolio",
        "date": "2014-01-01",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus officiis inventore corrupti natus in, perferendis, eum quisquam cupiditate dicta atque facilis labore optio voluptatum non, rerum maxime quibusdam molestias quos.",
        "imges": ['http://placehold.it/300x300', 'http://placehold.it/300x300', 'http://placehold.it/300x300']
    }],
    "display": function() {
        for (project in this.projects) {
            $('#projects').append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace(dataPlaceholder, this.projects[project].title);
            $('.project-entry:last').append(formattedProjectTitle);
            var formattedProjectDate = HTMLprojectDates.replace(dataPlaceholder, this.projects[project].date);
            $('.project-entry:last').append(formattedProjectDate);
            var formattedProjectDescription = HTMLprojectDescription.replace(dataPlaceholder, this.projects[project].description);
            $('.project-entry:last').append(formattedProjectDescription);
            for (img in this.projects[project].imges) {
                var formattedProjectImage = HTMLprojectImage.replace(dataPlaceholder, this.projects[project].imges[img]);
                $('.project-entry:last').append(formattedProjectImage);
            }
        }
    }
};

// Insert HEAD info.
bio.display();

function addFooterContact() {
    var formattedMobile = HTMLmobile.replace(dataPlaceholder, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(dataPlaceholder, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(dataPlaceholder, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(dataPlaceholder, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(dataPlaceholder, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(dataPlaceholder, bio.contacts.location);

    $('#footerContacts').append(formattedMobile)
        .append(formattedEmail)
        .append(formattedTwitter)
        .append(formattedGithub)
        .append(formattedBlog)
        .append(formattedLocation);
}

addFooterContact();

// Insert WORKEXPERIENCE
work.display();

// Insert PROJECTS
projects.display();

// Insert Education
education.display();

// Insert INTERNATIONALIZEBUTTON
$('#main').append(internationalizeButton);

function inName() {
    var nameStr = bio.name;
    var nameArray = nameStr.split(' ');
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    var newName = nameArray[0] + ' ' + nameArray[1];
    return newName;
}

// Insert GOOGLE MAP
$('#mapDiv').append(googleMap);