/*jslint node:true*/
"use strict";

/*global alert*/





var companyTitle = "Nonsense Story";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "String Manipulation";
document.getElementById("slogan").innerHTML = companySlogan;



function theStory() {





const thenouns = document.querySelector('#nouns').value;
const lowerNoun = thenouns.toLowerCase();   
const spacecommaSpecial = /[\s,\W ]+/g;
const nounWords = lowerNoun.trim().split(spacecommaSpecial);
console.log(nounWords); 
const upperNoun = thenouns.toUpperCase(); 
const chars = upperNoun.split('');


const theadjs = document.querySelector('#adjs').value; 
const lowerAdjs = theadjs.toLowerCase(); 
const spacecommaSpecialA = /[\s,\W ]+/g;
const adjsWords = lowerAdjs.trim().split(spacecommaSpecialA);
console.log(adjsWords); 
 


const theverbs = document.querySelector('#verbs').value;  
const lowerVerb = theverbs.toLowerCase(); 
const spacecommaSpecialV = /[\s,\W ]+/g;
const verbsWords = lowerVerb.trim().split(spacecommaSpecialV);
console.log(verbsWords); 

    

const myStory1 = `Once upon a time, there were four ${adjsWords[0]} ${nounWords[0]}s named ${chars[0]}andyn, ${chars[0]}yler, ${chars[0]}avin, and ${chars[0]}andie. `,
myStory2 = `They were best friends for life and wanted a ${adjsWords[1]} adventure. They found a map for the` ,   
myStory3 = ` lost Treasure of Titan. They searched for it by ${verbsWords[0]}ing for many ${adjsWords[2]} days. ` , 
myStory4 = `They also looked by the ${nounWords[1]}, ${nounWords[2]}, and ${nounWords[3]}. `, 
myStory5 = `They could not ${verbsWords[1]} to the long lost Treasure of Titan. Till one day, a message in a bottle, `,   
myStory6 = `came to their aid. Their eyes ${verbsWords[2]}ed them forward when the message guided them to the long lost Treasure of Titan, which was with their ${nounWords[4]}s named ${nounWords[5]} and ${nounWords[6]}, all along. ` ; 





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


















