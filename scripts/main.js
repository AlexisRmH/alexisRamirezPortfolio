/* Links to Home page */
let linksToHome = document.getElementsByClassName("linkToHome");
/* Links to Projects page */
let linksToProjects = document.getElementsByClassName("linkToProjects");
/* Links to About Me page */
let linksToAbout = document.getElementsByClassName("linkToAbout");

/* LINKS TO SOCIAL MEDIA */
/* Links to Email Me page */
let linksToEmail = document.getElementsByClassName("linkToEmail");
/* Links to FB */
let linksToFacebook = document.getElementsByClassName("linkToFacebook");
/* Links to In */
let linksToLinkedIn = document.getElementsByClassName("linkToLinkedIn");

/* Calls */
addHrefToLink(linksToHome, "./index.html");
addHrefToLink(linksToProjects, "./projects.html");
addHrefToLink(linksToAbout, "./about.html");
addHrefToLink(linksToEmail, "mailto:alexisrmh03@gmail.com");
addHrefToLink(linksToFacebook, "https://www.facebook.com/alexis.ramirezhernandez.5836/");
addHrefToLink(linksToLinkedIn, "https://www.linkedin.com/in/alexis-ad%C3%A1n-ram%C3%ADrez-hern%C3%A1ndez-87183a1b8/");

/* Make */

function addHrefToLink(elements, linkTo) {
    Array.prototype.forEach.call(elements, function (e) {
        e.href = linkTo;
    }); 
}