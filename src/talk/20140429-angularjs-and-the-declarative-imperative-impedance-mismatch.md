---
{
  "context": "http://schema.org",
  "type": "Educational event",
  "duration": "P30M",
  "id": "20140429-angularjs-and-the-declarative-imperative-impedance-mismatch",
  "name": "AngularJS and the Declarative / Imperative Impedance Mismatch",
  "layout": "page.html",
  "description": "AngularJS uses its HTML directives at the core of its UI generation. That means that you specify how to generate the HTML using HTML. Part of that logic has been moved to the controller functions, but part of it cannot be moved. The result is imperative constructs like ng-if and ng-repeat inside the declarative HTML template. The mismatch between an imperative problem and a declarative tool ends up in a messy solution in the long run. JSP tried the same thing with custom tag libraries, and failed. XSL tried the same thing, and failed too. This talk will get into deeper detail about why I believe that the HTML directives - one of the core elements that AngularJS is praised for - is not such a great solution for UI generation.",
  "inLanguage": "en",
  "performer": {
    "type": "Person",
    "name": "Jakob Jenkov",
    "id": "20140429-angularjs-and-the-declarative-imperative-impedance-mismatch",
    "twitter": "jjenkov",
    "sameAs": "https://twitter.com/@jjenkov",
    "url": "/talk/20140429-angularjs-and-the-declarative-imperative-impedance-mismatch.html",
    "image": "https://pbs.twimg.com/profile_images/273450574/20081123-20081123-3E1W7902-small-portrait.jpg"
  },
  "recordedIn": {
    "type": "CreativeWork",
    "video": {
      "type": "VideoObject",
      "id": "https://vimeo.com/94741153"
    }
  }
}
---
# AngularJS and the Declarative / Imperative Impedance Mismatch

AngularJS uses its HTML directives at the core of its UI generation. That means that you specify how to generate the HTML using HTML. Part of that logic has been moved to the controller functions, but part of it cannot be moved. The result is imperative constructs like ng-if and ng-repeat inside the declarative HTML template. The mismatch between an imperative problem and a declarative tool ends up in a messy solution in the long run. JSP tried the same thing with custom tag libraries, and failed. XSL tried the same thing, and failed too. This talk will get into deeper detail about why I believe that the HTML directives - one of the core elements that AngularJS is praised for - is not such a great solution for UI generation.