/* 
 * Simple javascript file to get the current language from the browser
 * and display the proper welcome in that language if posssible.
 */
document.write('<scr'+'ipt type="text/javascript" src="js/jquery.js" ></scr'+'ipt>');
var lang;

function getWelcome() {
    lang = getLanguage();
    if (!lang || !phrases[lang]) {
        lang = 'en';
    }
    document.getElementById('welcome').innerHTML = phrases[lang];
    
}

function getAboutMe()
{
    lang = getLanguage();
    if(!lang || !phrases[lang])
    {
        lang = 'en';
    }
    document.getElementById('aboutme').innerHTML = aboutMePhrases[lang];
}

function getContact()
{
    lang = getLanguage();
    if(!lang || !phrases[lang])
    {
        lang = 'en';
    }
    document.getElementById('contact').innerHTML = contactPhrases[lang];
}

 function getLanguage() {

         if (navigator.language) {
             lang = navigator.language;
         } else if (navigator.userLanguage) {
             lang = navigator.userLanguage;
         }

         if (lang && lang.length > 2) {
             lang = lang.substring(0, 2);
         }

         return lang;
     }

var phrases = { /* translation table for page */
    en: ["<h1>Welcome!</h1>\n\
<p>To my site</p>\n\
<p>\n\
</p>"]
};

var aboutMePhrases = 
{
    en: ["<h1>About Me</h1>\n\n\
<p>Let me tell you a little about myself:</p>\n\n\
<p>\n\
</p>"]
};

var contactPhrases = 
{
    en: ["<h2>Contact Information</h2>\n\n\
<p>Santos Ortega</p>\
<p>Camarillo, CA 93011</p>\
<p>(e) seortega13@gmail.com</p>\n\n\
<p>(c) 415.683.9579</p>"]
};