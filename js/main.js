/*jslint node:true*/
"use strict";

/*global alert*/



function loadImage() {
    
}



var companyTitle = "Nonsense Story";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "String Manipulation";
document.getElementById("slogan").innerHTML = companySlogan;



function theStory() {





const thenouns = document.querySelector('#nouns').innerHTML;
const lowerNoun = thenouns.toLowerCase(); 
    const nounWords = thenouns.split(' ');
    const chars = thenouns.split('');
    console.log(nounWords[1]); 
const nW = ',';
const nWords = lowerNoun.split(nW); 
console.log(nWords);  
 



const theadjs = document.querySelector('#adjs').innerHTML; 
const lowerAdjs = theadjs.toLowerCase(); 
const adjsWords = theadjs.split(' ');
console.log(adjsWords[1]); 
const aW = ',';
const aWords = lowerAdjs.split(aW);  
console.log(aWords); 


const theverbs = document.querySelector('#verbs').innerHTML;  
const lowerVerb = theverbs.toLowerCase(); 
const verbsWords = theverbs.split(' ');
console.log(verbsWords[1]); 
const vW = ',';
const vWords = lowerVerb.split(vW); 
console.log(vWords); 
    

const myStory1 = "Once upon a time, there were four " + nWords[0] + "s named " + chars[0] + "andyn, " + chars[0] + "yler, " + chars[0] + "avin, and " + chars[0] + "andie. ",
myStory2 = "They were best friends for life and wanted a " + aWords[0] + " adventure. They planned to " + vWords[0] ,   
myStory3 = " to the lost Treasure of Titan. They had two " + aWords[1] + " ideas of where it could be. Either next to the " + aWords[3] + " " + nWords[2] , 
myStory4 = " or by the " + nWords[3] + " and " + nWords[4] + ". ", 
myStory5 = "They " + vWords[1] + " for many " + aWords[2] + " days. They could not find the long lost Treasure of Titan. Till one day, a message in a bottle, ",   
myStory6 = "came to their aid. Their eyes " + vWords[2] + " them forward when the message guided them to the long lost Treasure of Titan, which was with their " + nWords[1] + "s named " + nWords[5] + " and " + nWords[6] + ", all along. " ; 





const all = myStory1.concat(myStory2, myStory3, myStory4, myStory5, myStory6);
    document.querySelector("#story").innerHTML = all; 





}




/*


function tellStory() {
// nounArray = querySelector('#noun') //lowercase String split()
// repeat for adjective and verbs 


var noun = myStory.replace(/\s+/," ").split(' '); 
console.log(noun[0]); 
var nounword = noun.toLowerCase(); 


var adj = myStory.replace(/\s+/," ").split(' '); 
console.log(adj[5]);
var adjective = adj.toLowerCase();  


var verb = myStory.replace(/\s+/," ").split(' '); 
console.log(verb[2]);
var verbword = verb.toLowerCase();  

document.getElementById('story').innerHTML = myStory; 

}


*/


















