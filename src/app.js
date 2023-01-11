/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let icon =['<i class="bi bi-arrows-fullscreen"></i>', 
             '<i class="bi bi-at"></i>',
             '<i class="bi bi-arrow-up-left-square"></i>',
             '<i class="bi bi-circle-half"></i>'
            ];
              
  
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];
  
  let iconRandom = Math.floor(Math.random() * icon.length);
  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  let excuse= icon[iconRandom]+ ' ' +who[whoRandom]+' '+what[whatRandom]+' '+when[whenRandom]+' ' +icon[iconRandom]
  let element=document.querySelector('#excuse');
  element.innerHTML=excuse;

  console.log("excuse: ", excuse);
  console.log("element: ", element);
  console.log("innerHTML: ", element.innerHTML);
};
