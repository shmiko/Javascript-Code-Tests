function getRelationship(num1,num2){
  if (num1 < num2){
    return num1 + " is less than " + num2;
  } else if (num1 > num2){
    return num1 + " is greater than " + num2;
  } else if (num1 == num2){
    return num1 + " is equal to " + num2;
  } else if (num1.typeOf != "number"){
    return "Can't compare relationships because" + num1 + " is not a number."
  } else if (num2.typeOf != "number"){
    return "Can't compare relationships because" + num2 + " is not a number."
  } else if (num2.typeOf != "number" && num1.typeOf != "number"){
    return "Can't compare relationships because " + num1 + " and " + num2 + " are not numbers."
  }
};
// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(arr) {
    // Your code goes here!
    return ""; //arr.split("").reverse().join("");
    //return arr.split(" ").reverse().join(" ").sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));


//totalBytes(psiResults) loop pageStats in psiResults get total numer of bytes
function totalBytes(results) {
    // Your code goes here!
    var totalNumBytes = 0;
    for (var key in results){
      if (results[key] == "BYTES"){
        totalNumBytes =+ results.value;
      }
    }
    return totalNumBytes;
}
//ruleList(psiResults) loop localizedRuleNames in ruleResults return array os strings
function ruleList(results) {
    // Your code goes here!

}
var psinsights;

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}

// Try logging the outputs below to test your code!
//console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));


var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample);

var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample);

var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample);
}
console.log(outsideExample);
