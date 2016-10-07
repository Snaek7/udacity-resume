/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var formattedName = HTMLheaderName.replace("%data%", "Emerson França");
 var formattedRole = HTMLheaderRole.replace("%data%", "Front-End Developer");
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


 var bio = {
		   "name": "Emerson",
		   "role": "Front-end developer",
		   "contacts": [{
		   		"mobile": "+55 (81) 99814-5382",
		   		"email": "emerson_franca77@icloud.com",
		   		"github": "Snaek7",
		   		"twitter": "@EmersonFranca77",
		   		"location": "Abreu e lima - PE"
		   }],
		   "welcomeMessage": "Welcome to my profile",
		   "skills": ["Javascript", "JQuery", "Html", "Css"],
		   "bioPic": "images/fry.jpg"
};



var work = {
	"jobs": [{
		"employer": "Gabriel Rações",
		"title": "Seller",
		"location": "Caetes 1",
		"dates": "2008 - 2016",
		"description": "Making sales, maintenance of system, updating data on database"

	}]
};

var education = {
	"schools": [

		{
			"name": "Uninassau University",
			"location": "Recife, PE, BR",
			"degree": "bachelor",
			"major": "Information Systems",
			"dates": "2015 - 2018",
			"url": ""
		}
	],
	"onlineCourses": [{
		"title": "Javascript Road Trip",
		"school": "CodeSchool",
		"date": "2016",
		"url": "https://www.codeschool.com/users/2500397/badges/321"


	}]
};

var projects = {
	"projects": [

		{
			"title": "Website",
			"dates": "2016",
			"description": "I make a responsive website",
			"images": ["images/197x148.gif", "images/197x148.gif"]

		}
	]
}


bio.display = function(){

	var formattedPic =  HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedPic, formattedWelcome);
	
	for(contact in bio.contacts){

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);	
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub);

	}
	


	$("#header").append(HTMLskillsStart);

	if(bio.skills.length > 0){
		for(skill in bio.skills){

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);

		}
	}


}





work.display = function(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedDescription);

		
	};

}



var inName = function(name){
	name = name.trim().split(" ");
	return name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();

}





education.display = function(){

	for(educations in education.schools){

		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[educations].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educations].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educations].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educations].major);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educations].location);
		$(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedMajor, formattedLocation);

	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for(courses in education.onlineCourses){
		var formattedName = HTMLschoolDegree.replace("%data%", education.onlineCourses[courses].school);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].date);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
		$(".education-entry:last").append(formattedTitle + formattedName, formattedDates, formattedUrl);
	}

}	



projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);			
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}


}

education.display();
bio.display();
work.display();
projects.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


